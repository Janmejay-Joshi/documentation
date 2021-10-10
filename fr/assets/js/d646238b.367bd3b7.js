"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[5782],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:1},l="Installer Archcraft avec Calamares",u={unversionedId:"install-archcraft/install-with-calamares",id:"install-archcraft/install-with-calamares",isDocsHomePage:!1,title:"Installer Archcraft avec Calamares",description:"Ceci est un simple guide pour les d\xe9butants pour installer Archcraft sur votre syst\xe9me, sans casser quoi que se sois",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/install-with-calamares.mdx",sourceDirName:"install-archcraft",slug:"/install-archcraft/install-with-calamares",permalink:"/fr/docs/install-archcraft/install-with-calamares",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/install-with-calamares.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lancer Archcraft avec grub",permalink:"/fr/docs/boot-iso/boot-with-grub"},next:{title:"Installer Archcraft avec ABIF",permalink:"/fr/docs/install-archcraft/install-with-abif"}},c=[{value:"Preparation",id:"preparation",children:[]},{value:"Partitionnement",id:"partitionnement",children:[]},{value:"Finalization",id:"finalization",children:[]}],p={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installer-archcraft-avec-calamares"},"Installer Archcraft avec Calamares"),(0,r.kt)("p",null,"Ceci est un simple guide pour les d\xe9butants pour installer Archcraft sur votre syst\xe9me, sans casser quoi que se sois\nDans ce guide, On vas installer Archcraft sur un syst\xe9me UEFI . Mais le processus est le m\xe9me si vous utilisez BIOS"),(0,r.kt)("p",null,"On vas assumez que vous avez d\xe9ja cr\xe9\xe9 une ",(0,r.kt)("a",{parentName:"p",href:"../boot-iso/boot-with-usb"},"bootable USB")," avec Archcraft ISO, lancez votre system avec elle, et selectionnez ",(0,r.kt)("strong",{parentName:"p"},"Boot Archcraft")," Lancez l'installeur sois avec l'app Bienvenue , ou avec le menu"),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Dans le menu Bienvenue, Choisissez votre langue et cliquez sur",(0,r.kt)("kbd",null,"Next")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(7783).Z})),(0,r.kt)("p",null,"Selectionnez  votre ",(0,r.kt)("strong",{parentName:"p"},"Region"),", ",(0,r.kt)("strong",{parentName:"p"},"Time Zone"),", ",(0,r.kt)("strong",{parentName:"p"},"System Locale")," etc et cliquez sur ",(0,r.kt)("kbd",null,"Next")," ",(0,r.kt)("inlineCode",{parentName:"p"},"si vous \xe9tes connect\xe9 a internet, ces options serronts choisis automatiquement")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8424).Z})),(0,r.kt)("p",null,"Selectionnez votre ",(0,r.kt)("strong",{parentName:"p"},"Keyboard Layout"),"(dans ce cas French) et cliquez sur ",(0,r.kt)("kbd",null,"Next")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Par d\xe9faut , votre disposition de clavier est automatiquement choisi grace a votre locale")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(9287).Z})),(0,r.kt)("h3",{id:"partitionnement"},"Partitionnement"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Sur ce guide, tout les partitionnements sont fait sur un disque VIERGE.")))),(0,r.kt)("p",null,"Voici l'\xe9tape ",(0,r.kt)("strong",{parentName:"p"},"qui fait peuur")," ou presque tout nouveau utilisateur de Linux foire quelque chose.\nSoyez prudents , il est recommend\xe9 de bien lire et comprendre ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/Partitioning#Partition_scheme"},"Partition scheme"),"\navant de faire quoi que se sois sur votre systeme "),(0,r.kt)("p",null,"Si vous installez Archcraft sur VirtualBox(",(0,r.kt)("em",{parentName:"p"},"une nouvelle machine virtuelle"),"), Vous pouvez juste cliquer sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Erase all disk"),"\nMais sur une vrai machine, ce n'est pas une bonne id\xe9e (",(0,r.kt)("em",{parentName:"p"},"sauf si vous d\xe9cidez de formatter votre pc enti\xe9rement"),")\nSur une vrai machine, Il est recommend\xe9 de choisir ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual Partitioning")," et dans ce guide, on vas faire ainsi\nCliquez sur le bouton Radio puis ",(0,r.kt)("kbd",null,"Next")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8121).Z})),(0,r.kt)("p",null,"Ici , vous verrez que le disque est enti\xe9rement vide (",(0,r.kt)("em",{parentName:"p"},"Mais dans votre cas , il y aura des partitions"),").\nMaintenant on vas cr\xe9er une ",(0,r.kt)("strong",{parentName:"p"},"Table de partitions")," , pour UEFI choisissez GPT, pour BIOS choisissez MBR"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vous n'avez pas a faire cette \xe9tape si votre disque a d\xe9ja des partitions"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(119).Z})),(0,r.kt)("p",null,"La Table de partitions est cr\xe9e et maitenant vous verrez de ",(0,r.kt)("inlineCode",{parentName:"p"},"L'espace Libre")," sur votre disque. Maintenant, cliquez sur ",(0,r.kt)("kbd",null,"Cr\xe9er")," pour cr\xe9er des partitions"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(4417).Z})),(0,r.kt)("p",null,"Pour cette installation , on vas cr\xe9er 3 partitions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boot")," : /boot/efi"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root")," : /"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"home")," : /home")),(0,r.kt)("p",null,"Optionnellement vous pouvez (",(0,r.kt)("em",{parentName:"p"},"Vous devez surtout"),") faire une partition swap, mais je skip cette partie ici (vous pouvez skip si vous avez assez de ram , ou vous \xe9tes sur une machine virtuelle)"),(0,r.kt)("p",null,"Sur des syst\xe9mes ",(0,r.kt)("strong",{parentName:"p"},"UEFI"),", vous devez cr\xe9er une partition ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," pour lancer le syst\xe9me. Si vous \xe9tes sous BIOS, Vous pouvez ne pas cr\xe9er une partition ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Just mount the EFI partition to ",(0,r.kt)("inlineCode",{parentName:"p"},"/boot/efi"),"\nVotre syst\xe9me a s\xfbrement une partition ",(0,r.kt)("strong",{parentName:"p"},"EFI")," . Dans ce cas ",(0,r.kt)("strong",{parentName:"p"},"NE LA FORMATTEZ PAS")," sinon vous pourrez pas lancer d'autres OS qui sont d\xe9ja install\xe9 (Genre Windows) ",(0,r.kt)("br",null)))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ayez s\xfbr de donner \xe0 votre partition EFI au minimum ",(0,r.kt)("inlineCode",{parentName:"p"},"100MB de stockage libre")," sinon l'installation vas pas r\xe9ussir."))),(0,r.kt)("p",null,"Puisse-que notre disque est vide, on vas cr\xe9er une partition EFI. Comme vous pouvez voir, On vas cr\xe9er une partition ",(0,r.kt)("inlineCode",{parentName:"p"},"fat32")," avec ",(0,r.kt)("inlineCode",{parentName:"p"},"300MB")," de stockage et la monter \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/boot/efi")," et mettre le drapeau ",(0,r.kt)("strong",{parentName:"p"},"boot")," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(1672).Z})),(0,r.kt)("p",null,"Maintenant cr\xe9ez une partition ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),". Encore une fois, choisissez ",(0,r.kt)("inlineCode",{parentName:"p"},"l'Espace libe")," et cliquez sur ",(0,r.kt)("kbd",null,"Create"),".\nSelectionnez la taille de votre partition root (",(0,r.kt)("em",{parentName:"p"},"mettez au minimum 10GB"),"), et le syst\xe9me de fichier (*Si vous vous en foutez, choisissez ",(0,r.kt)("strong",{parentName:"p"},"ext4*"),")\nMonter la \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," et mettez lui le drapeau ",(0,r.kt)("strong",{parentName:"p"},"root")," , Optionellement vous pouvez mettre le ",(0,r.kt)("strong",{parentName:"p"},"label")," pour le syst\xe9me de fichier si vous voulez utiliser une ",(0,r.kt)("strong",{parentName:"p"},"Encryption"),", Cochez la case ",(0,r.kt)("inlineCode",{parentName:"p"},"Encrypt")," et mettez un mot de passe."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(828).Z})),(0,r.kt)("p",null,"Et pour finir, cr\xe9ez une partition ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," et montez la \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/home"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3379).Z})),(0,r.kt)("p",null,"Voici a quoi devrais ressembler vos partitions apr\xe9s cela, une fois tout est bon , cliquez sur  ",(0,r.kt)("kbd",null,"Next"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8686).Z})),(0,r.kt)("h3",{id:"finalization"},"Finalization"),(0,r.kt)("p",null,"Cr\xe9ez un ",(0,r.kt)("inlineCode",{parentName:"p"},"Compte utilisateur")," pour vous, ceci est un formulaire tr\xe9s simple, remplissez le et cliquez ",(0,r.kt)("kbd",null,"Next")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(2169).Z})),(0,r.kt)("p",null,"Voici un r\xe9sum\xe9 de cette installation, toute modification faite et tout ce que fera l'installateur.\nJettez un coup d'oeil et une fois tout compte fait, cliquez sur ",(0,r.kt)("kbd",null,"Next")," pour commencer l'",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Installation"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3514).Z})),(0,r.kt)("p",null,"Maintenant, L'installation commence, cela peut prendre quelque minutes, vous pouvez sois regarder ses jolis photos ou bien....\nJe sais pas moi , allez manger des croissants ?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3045).Z})),(0,r.kt)("p",null,"Une fois tout est fait, Cliquez sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Red\xe9marrer maintenant")," pour red\xe9marrer le syst\xe9me directement (oubliez pas de retirer l'USB)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8069).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Et voil\xe0 , Archcraft est install\xe9 sur votre syst\xe9me, amusez vous bien !!!!")))}m.isMDXComponent=!0},7783:function(e,t,n){t.Z=n.p+"assets/images/1-cc9fab00cf87d406840711673f722e37.png"},8686:function(e,t,n){t.Z=n.p+"assets/images/10-5c95e72f1b87863007d9f19ed69f7500.png"},2169:function(e,t,n){t.Z=n.p+"assets/images/11-a04bf94b77fd2d06122d7855136b6525.png"},3514:function(e,t,n){t.Z=n.p+"assets/images/12-d4858b17b349a579614f4e62469c62be.png"},3045:function(e,t,n){t.Z=n.p+"assets/images/13-e878ee910a48b5e586e22e4badb49f12.png"},8069:function(e,t,n){t.Z=n.p+"assets/images/14-579a2a5ac33ca1218627753f12769648.png"},8424:function(e,t,n){t.Z=n.p+"assets/images/2-7c9a9c0c546265c85d80c22f08ece073.png"},9287:function(e,t,n){t.Z=n.p+"assets/images/3-c598691b78cf21451344190cf434f6f0.png"},8121:function(e,t,n){t.Z=n.p+"assets/images/4-c8d4d841f74f2f30b9d914044261cfd5.png"},119:function(e,t,n){t.Z=n.p+"assets/images/5-794a313c7c82e63a45139bb20f900bc0.png"},4417:function(e,t,n){t.Z=n.p+"assets/images/6-78b50e56d7555ef435e111d45995b828.png"},1672:function(e,t,n){t.Z=n.p+"assets/images/7-cb050540b1666f8ba61c1667e42704d7.png"},828:function(e,t,n){t.Z=n.p+"assets/images/8-70b342caebe2f4d74b521063b4cbf38a.png"},3379:function(e,t,n){t.Z=n.p+"assets/images/9-03958f4169397deb38becda3ea4bd585.png"}}]);