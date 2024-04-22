package internal

import (
	"context"
	"fmt"
	"sync"

	pb "github.com/akolpakov-somehash/go-microservices/proto/sale/quote"
)

type QuoteItem struct {
	ProductID int32
	Quantity  int32
}

type Quote struct {
	Items      map[int32]*QuoteItem
	CustomerId int32
}

type QuoteServer struct {
	pb.UnimplementedQuoteServiceServer
	quotes    map[int32]*Quote
	quoteLock sync.RWMutex
}

func NewQuoteServer() *QuoteServer {
	return &QuoteServer{
		quotes:    make(map[int32]*Quote),
		quoteLock: sync.RWMutex{},
	}
}

func (s *QuoteServer) createEmptyQuote(custimerId int32) *Quote {
	defer s.quoteLock.Unlock()
	quote := &Quote{
		CustomerId: custimerId,
		Items:      make(map[int32]*QuoteItem),
	}
	s.quoteLock.Lock()
	s.quotes[custimerId] = quote
	return s.quotes[custimerId]
}

func (s *QuoteServer) AddProduct(ctx context.Context, in *pb.ProductRequest) (*pb.Quote, error) {
	s.quoteLock.RLock()
	quote, exists := s.quotes[in.CustomerId]
	s.quoteLock.RUnlock()
	if !exists {
		quote = s.createEmptyQuote(in.CustomerId)
	}
	s.quoteLock.Lock()
	defer s.quoteLock.Unlock()
	quote.Items[in.ProductId] = &QuoteItem{
		ProductID: in.ProductId,
		Quantity:  in.Quantity,
	}
	protoQuote := &pb.Quote{}
	quoteToProto(quote, protoQuote)
	return protoQuote, nil
}

func (s *QuoteServer) GetQuote(ctx context.Context, in *pb.CustomerId) (*pb.Quote, error) {
	s.quoteLock.RLock()
	quote, exists := s.quotes[in.Id]
	s.quoteLock.RUnlock()
	if !exists {
		quote = s.createEmptyQuote(in.Id)
	}
	protoQuote := &pb.Quote{}
	quoteToProto(quote, protoQuote)
	return protoQuote, nil
}

func (s *QuoteServer) RemoveProduct(ctx context.Context, in *pb.ProductRequest) (*pb.Quote, error) {
	s.quoteLock.RLock()
	quote, exists := s.quotes[in.CustomerId]
	s.quoteLock.RUnlock()
	if !exists {
		return nil, fmt.Errorf("quote not found")
	}
	s.quoteLock.Lock()
	defer s.quoteLock.Unlock()
	delete(quote.Items, in.ProductId)
	protoQuote := &pb.Quote{}
	quoteToProto(quote, protoQuote)
	return protoQuote, nil
}

func (s *QuoteServer) UpdateQuantity(ctx context.Context, in *pb.ProductRequest) (*pb.Quote, error) {
	s.quoteLock.RLock()
	quote, exists := s.quotes[in.CustomerId]
	s.quoteLock.RUnlock()
	if !exists {
		return nil, fmt.Errorf("quote not found")
	}
	s.quoteLock.Lock()
	defer s.quoteLock.Unlock()
	quote.Items[in.ProductId].Quantity = in.Quantity
	protoQuote := &pb.Quote{}
	quoteToProto(quote, protoQuote)
	return protoQuote, nil
}

func quoteToProto(quote *Quote, protoQuote *pb.Quote) {
	protoQuote.CustomerId = quote.CustomerId
	protoQuote.Items = make([]*pb.QuoteItem, len(quote.Items))
	var wg sync.WaitGroup
	var mu sync.Mutex
	j := 0
	for i, item := range quote.Items {
		wg.Add(1)
		go func(i int32, item *QuoteItem) {
			defer wg.Done()
			defer mu.Unlock()

			protoQuote.Items[j] = &pb.QuoteItem{ProductId: item.ProductID, Quantity: item.Quantity}
			mu.Lock()
			j++
		}(i, item)
	}
	wg.Wait()
}
