"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[7362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6522:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"02-post-bspwm",title:"Changer les th\xe8mes et les ic\xf4nes dans bspwm",authors:"adi1090x",tags:["howto","bspwm","xsettingsd","gtk"]},c=void 0,l={permalink:"/fr/blog/02-post-bspwm",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/fr/docusaurus-plugin-content-blog/2021/07-20-post-bspwm.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021/07-20-post-bspwm.md",title:"Changer les th\xe8mes et les ic\xf4nes dans bspwm",description:"In Archcraft, Bspwm use xsettingsd, a daemon that implements the XSETTINGS specification.",date:"2021-07-20T00:00:00.000Z",formattedDate:"July 20, 2021",tags:[{label:"howto",permalink:"/fr/blog/tags/howto"},{label:"bspwm",permalink:"/fr/blog/tags/bspwm"},{label:"xsettingsd",permalink:"/fr/blog/tags/xsettingsd"},{label:"gtk",permalink:"/fr/blog/tags/gtk"}],readingTime:.395,truncated:!0,authors:[{name:"Aditya Shakya",title:"D\xe9veloppeur d'Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],nextItem:{title:"Ajouter ma musique en mpd",permalink:"/fr/blog/01-post-mpd"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Archcraft, Bspwm use ",(0,a.kt)("inlineCode",{parentName:"p"},"xsettingsd"),", a daemon that implements the ",(0,a.kt)("em",{parentName:"p"},"XSETTINGS")," specification.\nTo change gtk theme, icons and cursor theme, you need to edit the ",(0,a.kt)("strong",{parentName:"p"},"~/.xsettingsd")," file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit ",(0,a.kt)("strong",{parentName:"li"},"~/.xsettingsd")," file with your favorite text editor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim ~/.xsettingsd\n")))}f.isMDXComponent=!0}}]);