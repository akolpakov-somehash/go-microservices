FROM golang:latest

WORKDIR /go/src/app

COPY service/catalog /go/src/app

RUN go build -o catalog

CMD ["./catalog"]