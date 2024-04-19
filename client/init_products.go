package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"strings"
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
	colors := []string{"Red", "Blue", "Green", "Yellow", "Black", "White"}
	var wg sync.WaitGroup
	for i, color := range colors {
		wg.Add(1)
		go func(i int, color string) {
			defer wg.Done()
			name := fmt.Sprintf("%s Box", color)
			description := fmt.Sprintf("This is a %s box.", strings.ToLower(color))
			sku := fmt.Sprintf("sku-%d", i+1)
			image := fmt.Sprintf("%s.jpg", strings.ToLower(color))
			id, err := c.AddProduct(ctx, &pb.Product{Name: name, Description: description, Sku: sku, Image: image, Price: float32(i+1) * 10})
			if err != nil {
				log.Fatalf("could not add a product: %v", err)
			}
			productInfo, err := c.GetProductInfo(ctx, &pb.ProductId{Id: id.Id})
			if err != nil {
				log.Fatalf("could get a product: %v", err)
			}
			log.Printf("Product ID: %d, Product Name: %s, Description: %s", productInfo.Id, productInfo.Name, productInfo.Description)
		}(i, color)
	}
	wg.Wait()

}
