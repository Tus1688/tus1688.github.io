---
sidebar_position: 3
description: How to automate the deployment of a Go REST API with Docker
tags: [go, api, web development, docker]
---

Nowadays, go is one of the most popular programming languages because of its
simplicity and performance. So I will show you how to automate the deployment of
a Go REST API with Docker. 

:::danger Important Note
Docker run as root by default. So you need to be careful when using Docker.
:::

### Why we use Docker on Go REST API?
-  You need to execute go binary file to run your app, I think it's not a good idea
to run go binary file directly then put it on background
-  With Docker, you can run your app anywhere where Docker is installed
-  Docker is the most popular containerization tool
-  Docker documentation is very good

### Dockerfile
```
FROM golang:alpine AS builder

RUN apk update && apk add alpine-sdk git && rm -rf /var/cache/apk/*
RUN mkdir -p api
WORKDIR /api

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . .
RUN go build -o ./app ./main.go

FROM alpine:latest

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
WORKDIR /api
COPY --from=builder /api/app .

# Expose any port you want
EXPOSE 6000

ENTRYPOINT [ "./app" ]
```

### Explanation
So we use two stages in our Dockerfile. The first stage is the builder stage. We
use the golang image as a base image. Then we install the dependencies. After that,
we copy the compiled go binary file to the second stage. The second stage is the
production stage. We use the alpine image as a base image. We use alpine because
it's a lightweight image. Finally, we expose the port of our REST API, in this tutorial
we use port 6000. Then we run the go binary file.