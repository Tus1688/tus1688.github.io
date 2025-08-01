---
sidebar_position: 4
---

# Internal CRM

Internal CRM is my first professional web app that I created for a steel
distributor company, built using React as the frontend and Go with chi as the
backend. This project not only helped me understand the low-level workings
of HTTP and REST APIs, but it was also the first time I discovered the
**"hybrid stateless authentication"** that I made into a research article in 2025.

:::note
This project is not open source to maintain trade secrets and reduce the attack surface.
:::

## Analysis phase

It's important to note that the previous project I worked on differs
significantly in complexity and requirements from this current project.
To better understand the unique challenges of this project, I've initiated
a series of quick interviews with lower management personnel who are
currently using the company's old notebook system for distributing and
managing quotations. These interviews are designed to uncover the specific
pain points, sources of demotivation, and factors that drive motivation,
which will help us tailor our approach to this project. Finally, after making
the list of the features and flow, I began to consult with upper management to
ensure the created flow still aligns with the company's chain of control.

<details>
<summary>Features</summary>
<p>
- User authentication
    - Highly performant verification yet fast to revoke
    - TOTP for 2FA
    - Session revoke
    - Authentication log
    - Account creation and modification log
    - Multiple role (RBAC)
- Product
    - Unit creation, deletion, and modification log
    - Name creation, deletion, and modification log
- Customer
    - Customer data creation, deletion, and modification log
- Entity
    - Separate numbering
    - Entity data creation, deletion, and modification log
- Quotation
    - Draft
    - Metadata and item creation, deletion, and modification log
    - Pdf download
    - Common note "intellisense"
    - Built-in calculator
- Analytics
    - Get the product's last price
    - Get the most active product by quantity
    - Get the highest value product by the amount of money
    - Get past the 2-week quotation stage
    - Get the biggest customer by the number of quotations
    - Get the biggest customer by the amount of money
    - Get the customer's previously requested item
    - Get the total quotation based on the amount of money
</p>
</details>

<details>
<summary>Technical Features</summary>
<p>
- Our Infrastructure
    - Docker Swarm as the orchestrator
    - Traefik as the reverse proxy and certificate manager
- Database
    - PostgreSQL as the database
    - Redis as the cache
- Backend
    - Go with Chi, as Chi doesn't have any third-party dependencies, and it accepts the default (pure Go) http handler, which makes it easier for me to switch to another router
    - We use raw SQL over ORM binding to get granular control over the database and to support the complex JOIN without hurting the performance
- Frontend
    - React, because I have had a bad experience with SvelteKit about routing, UI library, and state management
    - To ensure that client-side rendering does not hurt the performance, I have made sure to implement code splitting and caching through Nginx config
- Authentication
    - I chose JWT for the authentication and authorization
    - For this project, instead of relying on expiration, I rely on the issued at timestamp to determine token expiration by adding the issued at timestamp to the duration, and checking whether the value is still less than the current time
    - By using issued at, I can set different expiration durations for different kinds of "sensitivity", e.g., 5 minutes for auth-related stuff, 30 minutes for customer-related stuff.
    - The access token and refresh token were save as httpOnly Cookie with sameSite=strict to prevent XSS and CSRF
- CI/CD
    - I still choose Github Actions to build and push the image to the registry as it is relatively cheaper than using Azure registry (for the current usage)
    - Currrent deployment process doesn't have any downtime as every service already have healthcheck and replicated more than one

</p>
</details>

## Reason for choosing those tech stack

Initially, my primary focus was on security. However, given that this is an
enterprise application, I need to ensure that all the technologies I choose will
remain supported over the next decade. If any become deprecated, I should be
able to quickly select and transition to another library or programming language.
With that in mind, I've decided to go with classic React alongside `react-router-dom`
and use Go with Chi.

## What I learned

- Real-life blue-green deployment
- A hybrid expiration time for the access token gives me more flexibility and security
- A lot of PL/pgSQL for database logging and maintaining the "ACID"-ity

## What I would do differently

- I feel like my code is scattered, even though I still group them based on their
functionality, so it would be a great idea to use dependency injection
- The JWT becomes very huge because there are many claims inside it, so it might
be a good idea to use any token that is able to receive a custom payload or even
a binary payload (like protocol buffers or message pack)