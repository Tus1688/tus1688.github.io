"use strict";(self.webpackChunktus_1688_github_io=self.webpackChunktus_1688_github_io||[]).push([[852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(k,a(a({ref:t},p),{},{components:n})):i.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},a="Kali Docker on VNC",l={unversionedId:"Project/Kali Docker on VNC/index",id:"Project/Kali Docker on VNC/index",title:"Kali Docker on VNC",description:"Docker is a popular tool for containerization that allows you to run applications in an isolated environment.",source:"@site/docs/Project/Kali Docker on VNC/index.md",sourceDirName:"Project/Kali Docker on VNC",slug:"/Project/Kali Docker on VNC/",permalink:"/docs/Project/Kali Docker on VNC/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mini ERP",permalink:"/docs/Project/Mini ERP/"},next:{title:"React Nginx Config",permalink:"/docs/Web Development/React Nginx Config"}},s={},c=[{value:"Potential risk &amp; Mitigation",id:"potential-risk--mitigation",level:3},{value:"How to use:",id:"how-to-use",level:3},{value:"Disclaimer",id:"disclaimer",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kali-docker-on-vnc"},"Kali Docker on VNC"),(0,o.kt)("p",null,"Docker is a popular tool for containerization that allows you to run applications in an isolated environment.\nWe can't deny how beautiful and practical it is to easily build and run kali linux. But as you working on\nweb pentesting, suddenly everything become dreadful. Hence, having GUI to run Burp Suite / OWASP ZAP is compulsory\nin pentesting."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kali docker vnc",src:n(347).Z,width:"2770",height:"1886"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Docker run as root by default. So you need to be careful when using Docker.")),(0,o.kt)("h3",{id:"potential-risk--mitigation"},"Potential risk & Mitigation"),(0,o.kt)("p",null,"But what if a malicious script successfully escalates to root and creates super sneaky persistence in /root,\nmodifies /etc/hosts, or installs something in /usr/bin? Fortunately, this won't happen in this setup as everything\nexcept /home/kali will be disposed following shutdown. This means that any changes made outside of /home/kali will\nbe lost, and the container will start fresh the next time you run it."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"it's still possible to add malicious hooks in /home/kali for example .zshrc or .profile, which will be run everytime you open zsh, and surely many others places.")),(0,o.kt)("h3",{id:"how-to-use"},"How to use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/Tus1688/kali-docker-vnc")),(0,o.kt)("li",{parentName:"ol"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"package.txt")),(0,o.kt)("li",{parentName:"ol"},"Fill it with packages you want to install, for example:",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"tool1"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"tool2"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"tool3"),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},"Generate Dockerfile by running ",(0,o.kt)("inlineCode",{parentName:"li"},"python3 generate.py")),(0,o.kt)("li",{parentName:"ol"},"Build docker image by running ",(0,o.kt)("inlineCode",{parentName:"li"},"python3 build.py")),(0,o.kt)("li",{parentName:"ol"},"Run it, ",(0,o.kt)("inlineCode",{parentName:"li"},"python3 run.py")," for cli only or ",(0,o.kt)("inlineCode",{parentName:"li"},"python3 vnc-run.py")," to start with vnc and ssh"),(0,o.kt)("li",{parentName:"ol"},"Profits \ud83e\udd11"),(0,o.kt)("li",{parentName:"ol"},"If you use vnc then you can kill your container with ",(0,o.kt)("inlineCode",{parentName:"li"},"python3 kill-container.py"))),(0,o.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"Usage of this tool for attacking targets without prior mutual consent is illegal. It is the end user\u2019s responsibility to obey all applicable local, state and federal laws. We assume no liability and are not responsible for any misuse or damage caused by this tool."))}d.isMDXComponent=!0},347:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/kali-docker-vnc-25d84f68a09c571b92a2a5b0c8cf1800.png"}}]);