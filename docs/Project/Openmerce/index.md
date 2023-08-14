---
sidebar_position: 3
---

# Openmerce

Openmerce is a wonderful e-commerce platform that is built with SvelteKit as the
frontend and Gin-Gonic as the backend. We built this project to learn more about
microservices architecture and how to build a scalable e-commerce platform that
has a great CI/CD pipeline for development and production.

:::note
Because we use microservices architecture, there are many repos that we need such as:
1. Frontend for the user [link to repo](https://github.com/CologneX/OpenMerce-SvelteKit)
2. Frontend for the staff [link to repo](https://github.com/CologneX/openmerce-staff-sveltekit)
3. Backend for the user & staff [link to repo](https://github.com/Tus1688/openmerce-backend)
4. Image server [link to repo](https://github.com/Tus1688/go-nginx-fs)
5. Freight cost service (sorry this is still private)
6. Deployment (Docker Swarm) [link to repo](https://github.com/Tus1688/openmerce-deployment)
:::

### Analysis phase
At the beginning of the project, we were confused as hell on what frontend to use,
what backend to use, and how to integrate them together. But instead of just
thinking and wondering, we decided to just start designing the database and the
infra. This attitude is very important because we can't just think and think. Time
is money, and I am thankful that I really accostumed to this attitude.

<details><summary>Features</summary>
<p>

-   Customer Authentication
    -   Email Verification
    -   Login / Register
    -   Reset Password
-   Customer Page
    -   Profile
    -   Order History
    -   Wishlist
    -   Cart
    -   Checkout
    -   Payment (from midtrans)
    -   Shipping Address
    -   Review
-   Staff Authentication
    -   Login
    -   Create new staff
-   Staff Page
    -   Create, Update, Delete Product
    -   Create, Update, Delete Category
    -   List Order
    -   Update Order Status

</p>
</details>

<details><summary>Technical Features</summary>
<p>

-   Our Infrastructure
    -   Docker Swarm as the orchestrator
    -   Traefik as the reverse proxy
    -   1 Azure VM for the manager node and 2 VM from Azure & my university for the worker node
-   Database
    -   MySQL as the main database
    -   Redis as the cache
-   Backend
    -   Gin-Gonic as it has a great performance in terms of development speed/productivity and performance
    -   No ORM, we use raw SQL because we want to have a granular control over the database and query optimization
    -   There are 3 services:
        -   Main (business logic)
        -   Image Optimization (convert the image into webp and serve it through nginx, we incorporate this service with
            fiber)
        -   Freight Cost (calculate the freight cost based on the weight and the destination)
-   Frontend
    -   SvelteKit because that's what my partner familliar with and has a great performance also the most important thing
        is that it is very easy to differentiate the page with the server side and the client side rendering
    -   We created 2 project with SvelteKit, one for the user and one for the staff. Because it is easier for us to set
        the virtual host in Traefik
-   Authentication
    -   We use JWT for authentication
    -   For the refresh token, it has similar functionality with my previous project (Mini ERP), but I enhanced it a little
        bit by changing the value of the refresh token everytime the user request a new access token
    -   Every cookie put in the browser is httpOnly and sameSite=strict, so I don't see the point of using CSRF token
-   CI/CD
    -   We use Github Actions to build and push the image to the registry (github package)
    -   We created shell script in the manager node. I also created non privileges user that only has sudo privilege to run that shell script. The
        shell script will pull the image from the registry and deploy it to the swarm every time there is a new image
        pushed to the registry (I am confident that this way there won't be any kind of privilege escalation nor security hole)
    -   There would be a little bit downtime because we didn't use healthcheck in all of our services. I will fix this in the future

</p>
</details>

### Reason for choosing those tech stack
Security is the most important thing in every aspect of my life. So I always
make sure that I use the best and well known library/framework. Also, compatibility
and performance are also important. Nevertheless, We won't use something that
we don't understand.

### What I learned
-   Multiple node deployment
-   Save a lot of time using CI/CD
-   How to use Docker Swarm
-   Better and more secure authentication
-   Better concurrency control
-   Multiple integration with third party service

### What I would do differently
-   Use Kubernetes instead of Docker Swarm
-   Add healthcheck to all of the services
-   Use a "better" CI/CD tool such as Gitlab CI
-   Distribute the redis cache to all of the worker node instead of just one node
-   Utilize the backend of SvelteKit more

### Misc.
Example of the shell script in the manager node
```bash
#!/bin/bash

docker pull ghcr.io/tus1688/openmerce-backend:main
docker service update --image ghcr.io/tus1688/openmerce-backend:main <the service name>
```
Put it as let's say `backend.sh` in the non-privileges user home directory. Remember,
don't forget to `chmod +x backend.sh` and make sure that the non-privileges user
doesn't have any sudo privilege except for running this script. Oh 1 more thing,
remove the write privilege from the script so that the non-privileges user can't
modify the script.

:::warning
Never ever use suid bit in the script. It is very dangerous!
`sudo` is the way to go. [reference](https://superuser.com/a/232258)
:::

Remember, always consult with your team and official documentation before creating
something. Don't be afraid to ask, because that's the only way to learn.
