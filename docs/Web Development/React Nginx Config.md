---
description: How to deploy a react app with nginx
tags: [react, nginx, web development]
---

There are many ways to deploy a react app. I always look for the simplest way and
the most secure way without compromising performance.
So I will show you how to deploy a react app with nginx.

:::danger Important Note
Secure is a relative term. It is secure for me, but it might not be secure for you.
So please do your own research before deploying your react app in production.
:::

### Why we use nginx on react?

-   Nginx is very fast
-   Nginx is very secure
-   Nginx is very stable
-   Nginx can handle a high volume of connections

### Who uses nginx?

-   Netflix
-   Airbnb
-   Cloudflare
-   Github
-   Heroku
-   And many more...

### How to deploy a react app with nginx?

-   First, you need to build your react app. You can do this by running `npm run build` or `yarn build` in your terminal.
-   Then, you need to copy the build folder to your nginx server.
-   Then, you need to create a new file in your nginx server. You can do this by running `sudo vi /etc/nginx/sites-available/default` in your terminal.
-   Then, you need to paste the nginx config below in your nginx server.
-   Then, you need to restart your nginx server. You can do this by running `sudo systemctl restart nginx` in your terminal.
-   Voila! You have deployed your react app with nginx.

### Nginx Config

```
server {
  listen 80;
  location /static/settings.json {
    root   /usr/share/nginx/html;
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate";
  }

  location /static {
    root   /usr/share/nginx/html;
    expires modified 1y;
    add_header Cache-Control "public";
    access_log off;
   }

  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
  server_tokens off;
  add_header X-Frame-Options "SAMEORIGIN";
  add_header X-Content-Type-Options nosniff;
  gzip on;
  gzip_disable "msie6";

  gzip_vary on;
  gzip_proxied any;
  gzip_comp_level 6;
  gzip_buffers 16 8k;
  gzip_http_version 1.1;
  gzip_min_length 0;
  gzip_types text/plain application/javascript text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype;

  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root  /usr/share/nginx/html;
  }
}
```

### Explanation

-   `server {` - This is the start of the server block.
-   `listen 80;` - This is the port that nginx will listen to.
-   `location /static/settings.json {` - This is the location of the settings.json file.
-   `expires -1;` - This is the expiration time of the settings.json file. Which means it always expires.
-   `location / {` - This is the location of the react app.
-   `try_files $uri $uri/ /index.html;` - This is to redirect all the requests to the index.html file. Because react is a single page application, and we don't want to get 404 errors.
-   `add_header Cache-Control "no-store, no-cache, must-revalidate";` - This is the cache control of the settings.json file.
-   `server_tokens off;` - This is to hide the nginx version.
-   `add_header X-Frame-Options "SAMEORIGIN";` - This is to prevent clickjacking.
-   `add_header X-Content-Type-Options nosniff;` - This is to prevent MIME sniffing.
-   `gzip on;` - This is to enable gzip compression.
-   `gzip_disable "msie6";` - This is to disable gzip compression for IE6.
-   `gzip_vary on;` - This is to enable gzip compression for all browsers.
-   `gzip_proxied any;` - This is to enable gzip compression for all proxies.
-   `gzip_comp_level 6;` - This is to set the gzip compression level. The higher the level, the more CPU time is needed to compress the data.
-   `gzip_buffers 16 8k;` - This is to set the number and size of the buffers used for reading and writing compressed data.
-   `gzip_http_version 1.1;` - This is to set the minimum HTTP version that supports gzip compression.
-   `gzip_min_length 0;` - This is to set the minimum length of the response that supports gzip compression.
-   `gzip_types text/plain application/javascript text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype;` - This is to set the MIME types that supports gzip compression.

### Conclusion

I hope you enjoyed this tutorial. We learned how to customize nginx to deploy a react app.
It would be more easier to deploy a react app with nginx + docker. So, see you in the next tutorial!
