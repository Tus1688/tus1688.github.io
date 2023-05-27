---
sidebar_position: 4
description: How to automate the deployment of a SvelteKit with Docker
tags: [svelte, web development, docker]
---

I couldn't lie that sveltekit is awesome framework for building web app. But,
I believe there is no official documentation about how to deploy sveltekit app
with docker. So I will show you how to automate the deployment of a SvelteKit
app with Docker.

:::danger Important Note
Docker run as root by default. So you need to be careful when using Docker.
:::

### Why we use Docker on SvelteKit?
-  With Docker, you can run your app anywhere where Docker is installed
-  Docker is the most popular containerization tool
-  It is easy to use and distribute
-  Make your app easy to scale

### Dockerfile
```
FROM node:lts AS build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm ci --omit=dev

FROM node:lts-alpine
# uncomment the line below if you need to make request to the outside world
# RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "build"]
```

### Explanation
So we use two stages in our Dockerfile. The first stage is the builder stage.
We use the node image as a base image. Then we copy the package.json and
package-lock.json file to the container. Then we install the dependencies.
After that, we copy the source code to the container. Then we build the
sveltekit app. Not to forget, we must run `npm ci --omit=dev` to only install
production dependencies. The second stage is the production stage. We use the
node image as a base image. Then we copy the build folder from the builder
stage to the container. Then we copy the package.json and node_modules folder
from the builder stage to the container. Then we expose the port 3000. Finally,
we run the sveltekit server. I use `node build` because I use
adapter-node. If you use adapter-static, there is no need to run `node build`
and maybe even better to use nginx as a production base image.