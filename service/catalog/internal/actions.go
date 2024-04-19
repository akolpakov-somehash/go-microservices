package internal

import (
	"context"
	"log"
	"sync"

	pb "github.com/akolpakov-somehash/crispy-spoon/proto/catalog/product"
	"gorm.io/gorm"
)

type Server struct {
	DB *gorm.DB
	pb.UnimplementedProductInfoServer
}

func (s *Server) AddProduct(ctx context.Context, in *pb.Product) (*pb.ProductId, error) {
	dbProduct := protoToProduct(in)
	id, err := CreateProduct(s.DB, dbProduct)
	if err != nil {
		return nil, err
	}
	log.Printf("Product %v : %v - Added.", id, in.Name)
	return &pb.ProductId{Id: id}, nil
}

func (s *Server) UpdataProduct(ctx context.Context, in *pb.Product) (*pb.Empty, error) {
	if _, exists := GetProductByID(s.DB, in.Id); exists != nil {
		return nil, exists
	}
	updatedProduct := protoToProduct(in)
	if err := UpdateProduct(s.DB, updatedProduct); err != nil {
		return nil, err
	}
	log.Printf("Product %v : %v - Updated.", in.Id, in.Name)
	return new(pb.Empty), nil
}

func (s *Server) DeleteProduct(ctx context.Context, in *pb.ProductId) (*pb.Empty, error) {
	if err := DeleteProductByID(s.DB, in.Id); err != nil {
		return nil, err
	}
	return new(pb.Empty), nil
}

func (s *Server) GetProductInfo(ctx context.Context, in *pb.ProductId) (*pb.Product, error) {
	dbProduct, err := GetProductByID(s.DB, in.Id)
	if err != nil {
		return nil, err
	}
	protoProduct := &pb.Product{}
	productToProto(dbProduct, protoProduct)
	return protoProduct, nil
}

func (s *Server) GetProductList(ctx context.Context, in *pb.Empty) (*pb.ProductList, error) {
	dbProducts, err := GetAllProducts(s.DB)
	if err != nil {
		return nil, err
	}
	protoProducts := make(map[uint64]*pb.Product, len(dbProducts))
	var wg sync.WaitGroup
	var mu sync.Mutex
	for _, product := range dbProducts {
		wg.Add(1)
		go func() {
			defer wg.Done()
			defer mu.Unlock()

			protoProduct := &pb.Product{}
			productToProto(product, protoProduct)
			mu.Lock()
			protoProducts[product.ID] = protoProduct
		}()
	}
	wg.Wait()

	return &pb.ProductList{Products: protoProducts}, nil
}

func protoToProduct(product *pb.Product) *DbProduct {
	return &DbProduct{
		ID:          product.Id,
		Name:        product.Name,
		Sku:         product.Sku,
		Description: product.Description,
		Price:       product.Price,
		Image:       product.Image,
	}
}

func productToProto(dbProduct *DbProduct, protoProduct *pb.Product) {
	protoProduct.Id = dbProduct.ID
	protoProduct.Name = dbProduct.Name
	protoProduct.Sku = dbProduct.Sku
	protoProduct.Description = dbProduct.Description
	protoProduct.Price = dbProduct.Price
	protoProduct.Image = dbProduct.Image
}
