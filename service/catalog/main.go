package main

import (
	"catalog/internal"
	"flag"
	"fmt"
	"log"
	"net"
	"os"
	"time"

	pb "github.com/akolpakov-somehash/go-microservices/proto/catalog/product"
	"github.com/cenkalti/backoff/v4"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// Get environment variables
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPassword, dbHost, dbPort, dbName)
	var db *gorm.DB

	operation := func() error {
		db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
		return err
	}

	exponentialBackOff := backoff.NewExponentialBackOff()
	exponentialBackOff.MaxElapsedTime = 2 * time.Minute
	exponentialBackOff.MaxInterval = 10 * time.Second

	err = backoff.Retry(operation, exponentialBackOff)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	} else {
		fmt.Println("Connected to database.")
	}
	db.AutoMigrate(&internal.DbProduct{})
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterProductInfoServer(s, &internal.Server{DB: db})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
