---
sidebar_position: 2
description: How to automate the deployment of a react app with Docker
tags: [react, nginx, web development, docker]
---

In the previous article, we have learned how to deploy a react app with nginx.
But we have to do it manually. So I will show you how to automate the deployment
of a react app with Docker.

:::danger Important Note
Docker run as root by default. So you need to be careful when using Docker.
:::

### Why we use Docker on react?

-   Containerization is the future of software development
-   Docker is the most popular containerization tool
-   Docker documentation is very good

### Dockerfile

```
FROM node:alpine AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
ENV GENERATE_SOURCEMAP=false
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Explanation
So we use two stages in our Dockerfile. The first stage is the builder stage.
We use the node image as a base image. Then we copy the package.json and yarn.lock
file to the container. Then we install the dependencies. After that, we copy the
source code to the container. Then we build the react app. The second stage is
the production stage. We use the nginx image as a base image. Then we copy the
build folder from the builder stage to the container. Then we remove the default
nginx configuration. Then we copy our custom nginx configuration to the container.
Then we expose the port 80. Finally, we run the nginx server.