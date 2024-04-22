FROM golang:latest

WORKDIR /go/src/app

COPY service/sale /go/src/app

RUN go build -o sale

CMD ["./sale"]