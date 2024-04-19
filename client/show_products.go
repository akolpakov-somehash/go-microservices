package main

import (
	"context"
	"flag"
	"log"
	"sync"
	"time"

	pb "github.com/akolpakov-somehash/crispy-spoon/proto/catalog/product"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	addr = flag.String("addr", "localhost:50051", "the address to connect to")
)

func main() {
	flag.Parse()
	// Set up a connection to the server.
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pb.NewProductInfoClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	products, err := c.GetProductList(ctx, &pb.Empty{})
	if err != nil {
		log.Fatalf("could not list products: %v", err)
	}
	var wg sync.WaitGroup
	maxGoroutines := 10
	guard := make(chan struct{}, maxGoroutines)

	for i, product := range products.Products {
		wg.Add(1)
		guard <- struct{}{}
		go func(i uint64, p *pb.Product) {
			defer wg.Done()

			_p, _ := c.GetProductInfo(ctx, &pb.ProductId{Id: p.Id})
			log.Printf("Product ID: %d, Product Name: %s, Description: %s", _p.Id, _p.Name, _p.Description)
			<-guard
		}(i, product)
	}
	wg.Wait()

}
