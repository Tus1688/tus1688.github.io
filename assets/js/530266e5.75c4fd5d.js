"use strict";(self.webpackChunktus_1688_github_io=self.webpackChunktus_1688_github_io||[]).push([[679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:"How to deploy a react app with nginx",tags:["react","nginx","web development"]},r=void 0,l={unversionedId:"Web Development/React Nginx Config",id:"Web Development/React Nginx Config",title:"React Nginx Config",description:"How to deploy a react app with nginx",source:"@site/docs/Web Development/React Nginx Config.md",sourceDirName:"Web Development",slug:"/Web Development/React Nginx Config",permalink:"/docs/Web Development/React Nginx Config",draft:!1,tags:[{label:"react",permalink:"/docs/tags/react"},{label:"nginx",permalink:"/docs/tags/nginx"},{label:"web development",permalink:"/docs/tags/web-development"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to deploy a react app with nginx",tags:["react","nginx","web development"]},sidebar:"tutorialSidebar",previous:{title:"Kali Docker on VNC",permalink:"/docs/Project/Kali Docker on VNC/"},next:{title:"Dockerize React with Nginx",permalink:"/docs/Web Development/Dockerize React with Nginx"}},p={},s=[{value:"Why we use nginx on react?",id:"why-we-use-nginx-on-react",level:3},{value:"Who uses nginx?",id:"who-uses-nginx",level:3},{value:"How to deploy a react app with nginx?",id:"how-to-deploy-a-react-app-with-nginx",level:3},{value:"Nginx Config",id:"nginx-config",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to deploy a react app. I always look for the simplest way and\nthe most secure way without compromising performance.\nSo I will show you how to deploy a react app with nginx."),(0,a.kt)("admonition",{title:"Important Note",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Secure is a relative term. It is secure for me, but it might not be secure for you.\nSo please do your own research before deploying your react app in production.")),(0,a.kt)("h3",{id:"why-we-use-nginx-on-react"},"Why we use nginx on react?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nginx is very fast"),(0,a.kt)("li",{parentName:"ul"},"Nginx is very secure"),(0,a.kt)("li",{parentName:"ul"},"Nginx is very stable"),(0,a.kt)("li",{parentName:"ul"},"Nginx can handle a high volume of connections")),(0,a.kt)("h3",{id:"who-uses-nginx"},"Who uses nginx?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Netflix"),(0,a.kt)("li",{parentName:"ul"},"Airbnb"),(0,a.kt)("li",{parentName:"ul"},"Cloudflare"),(0,a.kt)("li",{parentName:"ul"},"Github"),(0,a.kt)("li",{parentName:"ul"},"Heroku"),(0,a.kt)("li",{parentName:"ul"},"And many more...")),(0,a.kt)("h3",{id:"how-to-deploy-a-react-app-with-nginx"},"How to deploy a react app with nginx?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, you need to build your react app. You can do this by running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn build")," in your terminal."),(0,a.kt)("li",{parentName:"ul"},"Then, you need to copy the build folder to your nginx server."),(0,a.kt)("li",{parentName:"ul"},"Then, you need to create a new file in your nginx server. You can do this by running ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo vi /etc/nginx/sites-available/default")," in your terminal."),(0,a.kt)("li",{parentName:"ul"},"Then, you need to paste the nginx config below in your nginx server."),(0,a.kt)("li",{parentName:"ul"},"Then, you need to restart your nginx server. You can do this by running ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl restart nginx")," in your terminal."),(0,a.kt)("li",{parentName:"ul"},"Voila! You have deployed your react app with nginx.")),(0,a.kt)("h3",{id:"nginx-config"},"Nginx Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'server {\n  listen 80;\n  location /static/settings.json {\n    root   /usr/share/nginx/html;\n    expires -1;\n    add_header Cache-Control "no-store, no-cache, must-revalidate";\n  }\n\n  location /static {\n    root   /usr/share/nginx/html;\n    expires modified 1y;\n    add_header Cache-Control "public";\n    access_log off;\n   }\n\n  location / {\n    root   /usr/share/nginx/html;\n    index  index.html index.htm;\n    try_files $uri $uri/ /index.html;\n  }\n  server_tokens off;\n  add_header X-Frame-Options "SAMEORIGIN";\n  add_header X-Content-Type-Options nosniff;\n  gzip on;\n  gzip_disable "msie6";\n\n  gzip_vary on;\n  gzip_proxied any;\n  gzip_comp_level 6;\n  gzip_buffers 16 8k;\n  gzip_http_version 1.1;\n  gzip_min_length 0;\n  gzip_types text/plain application/javascript text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype;\n\n  error_page 500 502 503 504 /50x.html;\n  location = /50x.html {\n    root  /usr/share/nginx/html;\n  }\n}\n')),(0,a.kt)("h3",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server {")," - This is the start of the server block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listen 80;")," - This is the port that nginx will listen to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"location /static/settings.json {")," - This is the location of the settings.json file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expires -1;")," - This is the expiration time of the settings.json file. Which means it always expires."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"location / {")," - This is the location of the react app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"try_files $uri $uri/ /index.html;")," - This is to redirect all the requests to the index.html file. Because react is a single page application, and we don't want to get 404 errors."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'add_header Cache-Control "no-store, no-cache, must-revalidate";')," - This is the cache control of the settings.json file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server_tokens off;")," - This is to hide the nginx version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'add_header X-Frame-Options "SAMEORIGIN";')," - This is to prevent clickjacking."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add_header X-Content-Type-Options nosniff;")," - This is to prevent MIME sniffing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip on;")," - This is to enable gzip compression."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'gzip_disable "msie6";')," - This is to disable gzip compression for IE6."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_vary on;")," - This is to enable gzip compression for all browsers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_proxied any;")," - This is to enable gzip compression for all proxies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_comp_level 6;")," - This is to set the gzip compression level. The higher the level, the more CPU time is needed to compress the data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_buffers 16 8k;")," - This is to set the number and size of the buffers used for reading and writing compressed data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_http_version 1.1;")," - This is to set the minimum HTTP version that supports gzip compression."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_min_length 0;")," - This is to set the minimum length of the response that supports gzip compression."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip_types text/plain application/javascript text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype;")," - This is to set the MIME types that supports gzip compression.")),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"I hope you enjoyed this tutorial. We learned how to customize nginx to deploy a react app.\nIt would be more easier to deploy a react app with nginx + docker. So, see you in the next tutorial!"))}u.isMDXComponent=!0}}]);