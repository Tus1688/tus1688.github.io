"use strict";(self.webpackChunktus_1688_github_io=self.webpackChunktus_1688_github_io||[]).push([[778],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(g,i(i({ref:t},s),{},{components:o})):n.createElement(g,i({ref:t},s))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2711:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:3,description:"How to automate the deployment of a Go REST API with Docker",tags:["go","api","web development","docker"]},i=void 0,l={unversionedId:"Web Development/Dockerize Go REST API",id:"Web Development/Dockerize Go REST API",title:"Dockerize Go REST API",description:"How to automate the deployment of a Go REST API with Docker",source:"@site/docs/Web Development/Dockerize Go REST API.md",sourceDirName:"Web Development",slug:"/Web Development/Dockerize Go REST API",permalink:"/docs/Web Development/Dockerize Go REST API",draft:!1,tags:[{label:"go",permalink:"/docs/tags/go"},{label:"api",permalink:"/docs/tags/api"},{label:"web development",permalink:"/docs/tags/web-development"},{label:"docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"How to automate the deployment of a Go REST API with Docker",tags:["go","api","web development","docker"]},sidebar:"tutorialSidebar",previous:{title:"Dockerize React with Nginx",permalink:"/docs/Web Development/Dockerize React with Nginx"}},p={},c=[{value:"Why we use Docker on Go REST API?",id:"why-we-use-docker-on-go-rest-api",level:3},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Explanation",id:"explanation",level:3}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nowadays, go is one of the most popular programming languages because of its\nsimplicity and performance. So I will show you how to automate the deployment of\na Go REST API with Docker. "),(0,r.kt)("admonition",{title:"Important Note",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Docker run as root by default. So you need to be careful when using Docker.")),(0,r.kt)("h3",{id:"why-we-use-docker-on-go-rest-api"},"Why we use Docker on Go REST API?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need to execute go binary file to run your app, I think it's not a good idea\nto run go binary file directly then put it on background"),(0,r.kt)("li",{parentName:"ul"},"With Docker, you can run your app anywhere where Docker is installed"),(0,r.kt)("li",{parentName:"ul"},"Docker is the most popular containerization tool"),(0,r.kt)("li",{parentName:"ul"},"Docker documentation is very good")),(0,r.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM golang:alpine AS builder\n\nRUN apk update && apk add alpine-sdk git && rm -rf /var/cache/apk/*\nRUN mkdir -p api\nWORKDIR /api\n\nCOPY go.mod .\nCOPY go.sum .\nRUN go mod download\n\nCOPY . .\nRUN go build -o ./app ./main.go\n\nFROM alpine:latest\n\nRUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*\nWORKDIR /api\nCOPY --from=builder /api/app .\n\n# Expose any port you want\nEXPOSE 6000\n\nENTRYPOINT [ "./app" ]\n')),(0,r.kt)("h3",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"So we use two stages in our Dockerfile. The first stage is the builder stage. We\nuse the golang image as a base image. Then we install the dependencies. After that,\nwe copy the compiled go binary file to the second stage. The second stage is the\nproduction stage. We use the alpine image as a base image. We use alpine because\nit's a lightweight image. Finally, we expose the port of our REST API, in this tutorial\nwe use port 6000. Then we run the go binary file."))}u.isMDXComponent=!0}}]);