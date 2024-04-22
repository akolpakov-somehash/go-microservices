package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"sale/internal"

	pbQuote "github.com/akolpakov-somehash/go-microservices/proto/sale/quote"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 50052, "The server port")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pbQuote.RegisterQuoteServiceServer(s, internal.NewQuoteServer())
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
