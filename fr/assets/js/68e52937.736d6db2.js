"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[8674],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=u(n),k=i,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,r(r({ref:t},o),{},{components:n})):a.createElement(d,r({ref:t},o))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return o},default:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},p="Installer Archcraft avec ABIF",u={unversionedId:"install-archcraft/install-with-abif",id:"install-archcraft/install-with-abif",isDocsHomePage:!1,title:"Installer Archcraft avec ABIF",description:"ABIF est le 2\xe9me installeur sur Archcraft, Il est sous terminal et tr\xe9s puissant. On expecte les gens qui savent ce qu'ils font d'utiliser cet installeur pour installer Archcraft.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/install-with-abif.mdx",sourceDirName:"install-archcraft",slug:"/install-archcraft/install-with-abif",permalink:"/fr/docs/install-archcraft/install-with-abif",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/install-with-abif.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installer Archcraft avec Calamares",permalink:"/fr/docs/install-archcraft/install-with-calamares"},next:{title:"Post Installation",permalink:"/fr/docs/install-archcraft/post-install"}},o=[{value:"Pr\xe9parer l&#39;installation",id:"pr\xe9parer-linstallation",children:[]},{value:"Partitionner le disque",id:"partitionner-le-disque",children:[]},{value:"Configuration du chiffrement LUKS",id:"configuration-du-chiffrement-luks",children:[]},{value:"Configurer LVM",id:"configurer-lvm",children:[]},{value:"Monter les partitions",id:"monter-les-partitions",children:[]},{value:"Installer la base",id:"installer-la-base",children:[]},{value:"Configurer la base",id:"configurer-la-base",children:[]},{value:"Revoir les fichiers de configuration",id:"revoir-les-fichiers-de-configuration",children:[]},{value:"Terminer",id:"terminer",children:[]}],c={toc:o};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installer-archcraft-avec-abif"},"Installer Archcraft avec ABIF"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ABIF"))," est le 2\xe9me installeur sur Archcraft, Il est sous terminal et tr\xe9s puissant. On expecte les gens qui savent ce qu'ils font d'utiliser cet installeur pour installer Archcraft."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"On recommende pas d'utiliser cet installeur pour des d\xe9butants, Utilisez ",(0,l.kt)("a",{parentName:"em",href:"./install-with-calamares"},"Calamares")," \xe0 la place."),(0,l.kt)("br",null),"\n",(0,l.kt)("em",{parentName:"p"},"Mais si vous voulez continuer avec cette m\xe9thode, continuez \xe0 lire."))),(0,l.kt)("p",null,"Dans ce guide, je vais installer Archcraft sur un syst\xe8me UEFI avec ",(0,l.kt)("inlineCode",{parentName:"p"},"Encryption")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"LVM")," en utilisant ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ABIF")),".\nLe processus sera le m\xeame si vous utilisez le BIOS."),(0,l.kt)("p",null,"Je suppose que vous avez d\xe9j\xe0 cr\xe9\xe9 une ",(0,l.kt)("a",{parentName:"p",href:"../boot-iso/boot-with-usb"},"USB bootable")," avec l'ISO d'Archcraft.\ns\xe9lectionnez ",(0,l.kt)("strong",{parentName:"p"},"Boot Archcraft"),". Lancez l'installateur via l'app de bienvenue ou le menu."),(0,l.kt)("p",null,"S\xe9lectionnez la langue de l'installateur et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5483).Z})),(0,l.kt)("h3",{id:"pr\xe9parer-linstallation"},"Pr\xe9parer l'installation"),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Pr\xe9parez l'installation")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2826).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Set Virtual Console"),", choisissez votre disposition et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2985).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Set Desktop Keyboard Layout"),", choisissez votre disposition et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3930).Z})),(0,l.kt)("h3",{id:"partitionner-le-disque"},"Partitionner le disque"),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"List Devices")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1406).Z})),(0,l.kt)("p",null,"Ici, Vous pouvez voir les disques et partitions disponibles sur votre syst\xe8me."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(8533).Z})),(0,l.kt)("p",null,"Si votre disque est d\xe9j\xe0 partitionn\xe9, vous pouvez sauter cette \xe9tape et passer \xe0 :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configuration-du-chiffrement-luks"},"Configuration du chiffrement LUKS")," (",(0,l.kt)("em",{parentName:"li"},"Si vous voulez utiliser ",(0,l.kt)("inlineCode",{parentName:"em"},"Encryption")),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configurer-lvm"},"Configurer LVM")," (",(0,l.kt)("em",{parentName:"li"},"Si vous voulez configurer ",(0,l.kt)("inlineCode",{parentName:"em"},"LVM")),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#monter-les-partitions"},"Monter Les Partitions")," (",(0,l.kt)("em",{parentName:"li"},"Si vous voulez juste une installation normale"),")")),(0,l.kt)("p",null,"Si vous voulez faire le partitionnement, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Partition Disk")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5919).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Votre disque")," et appuyez sur ",(0,l.kt)("kbd",null,"Entr\xe9e"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(0).Z})),(0,l.kt)("p",null,"Choisissez n'importe quel utilitaire de partitionnement (",(0,l.kt)("em",{parentName:"p"}," En utilisant ",(0,l.kt)("inlineCode",{parentName:"em"},"gparted")," ici"),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9771).Z})),(0,l.kt)("p",null,"Faites le partitionnement et quand vous avez termin\xe9, quittez ",(0,l.kt)("inlineCode",{parentName:"p"},"gparted"),"."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Si votre syst\xe8me a d\xe9j\xe0 une partition EFI, assurez-vous qu'elle a au moins ",(0,l.kt)("inlineCode",{parentName:"p"},"100MB de stockage libre"),", ou l'installation \xe9chouera."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9710).Z})),(0,l.kt)("h3",{id:"configuration-du-chiffrement-luks"},"Configuration du chiffrement LUKS"),(0,l.kt)("p",null,"Si vous ne voulez pas utiliser ",(0,l.kt)("strong",{parentName:"p"},"Disk Encryption"),", vous pouvez sauter cette \xe9tape et passer \xe0 :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configurer-lvm"},"Configurer LVM")," (",(0,l.kt)("em",{parentName:"li"},"Si vous voulez configurer ",(0,l.kt)("inlineCode",{parentName:"em"},"LVM")),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#monter-les-partitions"},"Monter Les Partitions")," (",(0,l.kt)("em",{parentName:"li"},"Si vous voulez juste une installation normale"),")")),(0,l.kt)("p",null,"Si vous voulez utiliser ",(0,l.kt)("strong",{parentName:"p"},"Disk Encryption"),", s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"LUKS Encryption")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9058).Z})),(0,l.kt)("p",null,"Je vais juste aller avec ",(0,l.kt)("inlineCode",{parentName:"p"},"LUKS automatique")," mais si vous avez des pr\xe9f\xe9rences, Utilisez cela et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4540).Z})),(0,l.kt)("p",null,"S\xe9lectionnez la partition que vous voulez crypter (",(0,l.kt)("em",{parentName:"p"},"Je vais crypter root qui est ",(0,l.kt)("inlineCode",{parentName:"em"},"/dev/sda2")),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7160).Z})),(0,l.kt)("p",null,"Entrez le nom pour le ",(0,l.kt)("inlineCode",{parentName:"p"},"Dispositif de bloc crypt\xe9")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5366).Z})),(0,l.kt)("p",null,"Tapez un ",(0,l.kt)("inlineCode",{parentName:"p"},"mot de passe")," fort et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),", Recommencez."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6064).Z})),(0,l.kt)("p",null,"Vous pouvez revoir votre configuration LUKS ici. Quand vous avez termin\xe9, appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour sortir."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(464).Z})),(0,l.kt)("p",null,"R\xe9p\xe9tez le processus pour crypter d'autres partitions (",(0,l.kt)("em",{parentName:"p"},"par ex : ",(0,l.kt)("inlineCode",{parentName:"em"},"/home")),").\nLorsque vous avez termin\xe9, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Back")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4836).Z})),(0,l.kt)("h3",{id:"configurer-lvm"},"Configurer LVM"),(0,l.kt)("p",null,"Si vous ne voulez pas configurer ",(0,l.kt)("strong",{parentName:"p"},"Logical Volumes"),", Vous pouvez sauter cette \xe9tape et passer \xe0 ",(0,l.kt)("a",{parentName:"p",href:"#monter-les-partitions"},"Monter Les Partitions"),".",(0,l.kt)("br",null),"\nSi vous le faites, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Gestion des volumes logiques")," et appuyez sur ",(0,l.kt)("kbd",null,"Entr\xe9e"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5149).Z})),(0,l.kt)("p",null,"Cr\xe9ez d'abord un ",(0,l.kt)("strong",{parentName:"p"},"Groupe de volumes"),", S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Cr\xe9er un VG et un ou des LV(s)")," et appuyez sur ",(0,l.kt)("kbd",null,"Entr\xe9e"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3770).Z})),(0,l.kt)("p",null,"Entrez le nom du ",(0,l.kt)("inlineCode",{parentName:"p"},"groupe")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4092).Z})),(0,l.kt)("p",null,"S\xe9lectionnez les ",(0,l.kt)("inlineCode",{parentName:"p"},"Partitions")," (",(0,l.kt)("em",{parentName:"p"},"utiliser ",(0,l.kt)("kbd",null,"SPACE")),") que vous voulez ajouter au groupe LV et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6026).Z})),(0,l.kt)("p",null,"Appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour confirmer la cr\xe9ation du groupe."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3618).Z})),(0,l.kt)("p",null,"Vous obtiendrez un dialogue, confirmant que le groupe a \xe9t\xe9 cr\xe9\xe9. Appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour quitter."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7615).Z})),(0,l.kt)("p",null,"S\xe9lectionnez le ",(0,l.kt)("inlineCode",{parentName:"p"},"Nombre")," de volumes dans le groupe (",(0,l.kt)("em",{parentName:"p"},"Nous avons choisi deux partitions \xe0 ajouter dans le groupe plus t\xf4t"),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7936).Z})),(0,l.kt)("p",null,"Entrez le nom du premier LV (",(0,l.kt)("em",{parentName:"p"},"pour ",(0,l.kt)("inlineCode",{parentName:"em"},"root")),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7301).Z})),(0,l.kt)("p",null,"Entrez la taille de la ",(0,l.kt)("inlineCode",{parentName:"p"},"LV")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2920).Z})),(0,l.kt)("p",null,"Vous verrez que le LV a \xe9t\xe9 cr\xe9\xe9. Appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour sortir."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3586).Z})),(0,l.kt)("p",null,"Faites la m\xeame chose pour le deuxi\xe8me LV, Entrez le nom et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),". La taille sera s\xe9lectionn\xe9e automatiquement."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1236).Z})),(0,l.kt)("p",null,"Appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour voir votre sch\xe9ma LVM."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7919).Z})),(0,l.kt)("p",null,"Lorsque vous avez termin\xe9 et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour quitter."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1847).Z})),(0,l.kt)("h3",{id:"monter-les-partitions"},"Monter les partitions"),(0,l.kt)("p",null,"Maintenant que nous avons configur\xe9 les partitions, (",(0,l.kt)("em",{parentName:"p"},"Encryptage et LVM"),"). Il est temps de les monter pour l'installation."),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Mount Partitions")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6280).Z})),(0,l.kt)("p",null,"S\xe9lectionnez la ",(0,l.kt)("inlineCode",{parentName:"p"},"Root Partition")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),". Gardez \xe0 l'esprit que :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Si vous configurez ",(0,l.kt)("strong",{parentName:"li"},"LVM")," (",(0,l.kt)("em",{parentName:"li"},"avec cryptage"),"), choisissez cela pour ",(0,l.kt)("inlineCode",{parentName:"li"},"root")," (",(0,l.kt)("em",{parentName:"li"},"par ex : dans cette configuration ",(0,l.kt)("strong",{parentName:"em"},"/dev/mapper/archcraft-lvol_root")," sera la racine"),")."),(0,l.kt)("li",{parentName:"ul"},"Si vous avez configur\xe9 ",(0,l.kt)("strong",{parentName:"li"},"Cryptage")," seulement (",(0,l.kt)("em",{parentName:"li"},"pas de LVM"),"), choisissez cela pour ",(0,l.kt)("inlineCode",{parentName:"li"},"root")," (",(0,l.kt)("em",{parentName:"li"},"dev/mapper/cryptroot"),")"),(0,l.kt)("li",{parentName:"ul"},"Si vous n'avez pas configur\xe9 ",(0,l.kt)("em",{parentName:"li"},"Encryptage")," ou ",(0,l.kt)("em",{parentName:"li"},"LVM"),", choisissez ",(0,l.kt)("inlineCode",{parentName:"li"},"root")," normalement (",(0,l.kt)("em",{parentName:"li"},"/dev/sda2"),")")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7835).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4")," comme syst\xe8me de fichiers (",(0,l.kt)("em",{parentName:"p"},"vous pouvez choisir tout autre type de fs"),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1425).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Yes")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour formater la partition, Ignorez les autres trucs."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6230).Z})),(0,l.kt)("p",null,"Si vous avez mis en place une ",(0,l.kt)("strong",{parentName:"p"},"Partition de remplacement"),", vous pouvez la monter ici. Vous pouvez aussi utiliser un ",(0,l.kt)("inlineCode",{parentName:"p"},"Swapfile")," si vous voulez.\nS\xe9lectionnez ce que vous pr\xe9f\xe9rez et appuyez sur ",(0,l.kt)("kbd",null,"Entr\xe9e"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(98).Z})),(0,l.kt)("p",null,"Maintenant, montez la partition ",(0,l.kt)("inlineCode",{parentName:"p"},"boot"),". S\xe9lectionnez votre partition ",(0,l.kt)("inlineCode",{parentName:"p"},"EFI")," (",(0,l.kt)("em",{parentName:"p"},"/dev/sda1"),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7054).Z})),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Votre syst\xe8me peut d\xe9j\xe0 avoir une partition ",(0,l.kt)("strong",{parentName:"p"},"EFI"),". Dans ce cas ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"NE LA FORMATTEZ PAS"))," ou vous ne pourrez pas d\xe9marrer sur les autres OS install\xe9s (Disons windows)",(0,l.kt)("br",null),".\nMontez simplement la partition EFI dans ",(0,l.kt)("inlineCode",{parentName:"p"},"/boot"),"."))),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"No")," si vous ne voulez pas formater la partition EFI et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4206).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"/boot")," comme point de montage et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5695).Z})),(0,l.kt)("p",null,"Et, maintenant vous pouvez monter le reste des partitions (",(0,l.kt)("em",{parentName:"p"},"par ex : /home"),") ici. S\xe9lectionnez-le et appuyez sur ",(0,l.kt)("kbd",null,"Enter")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2832).Z})),(0,l.kt)("p",null,"Encore une fois, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4")," (",(0,l.kt)("em",{parentName:"p"},"ou tout autre"),") comme FS et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3259).Z})),(0,l.kt)("p",null,"Entrez le ",(0,l.kt)("inlineCode",{parentName:"p"},"point de montage")," pour la partition et et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2039).Z})),(0,l.kt)("p",null,"Lorsque vous avez fini de monter toutes les partitions, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Done")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour sortir."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(8216).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Back")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour aller \xe0 l'installation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7001).Z})),(0,l.kt)("h3",{id:"installer-la-base"},"Installer la base"),(0,l.kt)("p",null,"Maintenant que toutes les partitions sont mont\xe9es et pr\xeates, installons les ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Paquets Base")),"."),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Install Base")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9849).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Installer les paquets de base")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4861).Z})),(0,l.kt)("p",null,"Attendez que l'installation soit termin\xe9e. En attendant, ",(0,l.kt)("a",{parentName:"p",href:"https://youtu.be/dQw4w9WgXcQ?t=5"},"\xc9gayez votre humeur...")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1851).Z})),(0,l.kt)("p",null,"Apr\xe8s que l'installation soit faite, S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Run Mkinitcpio")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1581).Z})),(0,l.kt)("p",null,"Cela va g\xe9n\xe9rer les fichiers ",(0,l.kt)("strong",{parentName:"p"},"initramfs-linux")," et ",(0,l.kt)("strong",{parentName:"p"},"initramfs-linux-fallback"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6598).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Install Bootloader")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9851).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"grub")," comme chargeur de d\xe9marrage et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2583).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Yes")," pour que ",(0,l.kt)("em",{parentName:"p"},"grub")," soit le chargeur de d\xe9marrage par d\xe9faut et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6612).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Back")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour quitter l'installation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4087).Z})),(0,l.kt)("h3",{id:"configurer-la-base"},"Configurer la base"),(0,l.kt)("p",null,"Archcraft est install\xe9 sur votre syst\xe8me. Il est temps de configurer votre installation."),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Configurer la base")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(8579).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"G\xe9n\xe9rer FSTAB")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(2715).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Part UUID")," pour ",(0,l.kt)("strong",{parentName:"p"},"UEFI")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"Device UUID")," pour ",(0,l.kt)("strong",{parentName:"p"},"BIOS")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4771).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Set Hostname")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7057).Z})),(0,l.kt)("p",null,"Entrez le ",(0,l.kt)("inlineCode",{parentName:"p"},"nom d'h\xf4te")," de votre syst\xe8me et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5791).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Set System Locale")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(64).Z})),(0,l.kt)("p",null,"S\xe9lectionnez la locale que vous voulez utiliser (",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"en_US.UTF-8")," pour l'anglais am\xe9ricain"),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6641).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Set Timezone and Clock")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9952).Z})),(0,l.kt)("p",null,"S\xe9lectionnez votre ",(0,l.kt)("inlineCode",{parentName:"p"},"Fuseau horaire")," (par exemple : ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"ASIA")),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3582).Z})),(0,l.kt)("p",null,"S\xe9lectionnez votre ",(0,l.kt)("inlineCode",{parentName:"p"},"R\xe9gion")," (ex : ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"Kolkata")),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3669).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Oui")," et appuyez sur ",(0,l.kt)("kbd",null,"Entr\xe9e"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9509).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"utc")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Pour le double d\xe9marrage avec Windows, il est recommand\xe9 de ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/System_time#UTC_in_Microsoft_Windows"},"configurer Windows pour qu'il utilise l'UTC"),",\nplut\xf4t que Linux pour utiliser l'heure locale. (",(0,l.kt)("em",{parentName:"p"},"Windows utilise par d\xe9faut l'heure locale"),")"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1639).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Set Root Password")," pour d\xe9finir un mot de passe pour ",(0,l.kt)("strong",{parentName:"p"},"root")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7891).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Add New User(s)")," pour cr\xe9er un ou plusieurs nouveaux comptes utilisateurs et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6351).Z})),(0,l.kt)("p",null,"Entrez ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9766).Z})),(0,l.kt)("p",null,"Saisissez ",(0,l.kt)("inlineCode",{parentName:"p"},"mot de passe")," pour votre compte utilisateur et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),". Confirmez le mot de passe."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(4034).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Security and systemd Tweaks")," pour r\xe9gler ces trucs (",(0,l.kt)("em",{parentName:"p"},"Si vous savez quoi faire"),") et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7040).Z})),(0,l.kt)("p",null,"Lorsque vous avez termin\xe9, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Back")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour sortir."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(9177).Z})),(0,l.kt)("h3",{id:"revoir-les-fichiers-de-configuration"},"Revoir les fichiers de configuration"),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Review Configuration Files")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6946).Z})),(0,l.kt)("p",null,"S\xe9lectionnez le ",(0,l.kt)("inlineCode",{parentName:"p"},"fichier")," que vous voulez visualiser et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),". Lorsque vous avez termin\xe9, s\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Back")," pour quitter."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(1274).Z})),(0,l.kt)("h3",{id:"terminer"},"Terminer"),(0,l.kt)("p",null,"Tout est termin\xe9... Vous pouvez maintenant ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Quitter le programme d'installation"))," et red\xe9marrer le syst\xe8me."),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Done")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6464).Z})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("inlineCode",{parentName:"p"},"Yes")," et appuyez sur ",(0,l.kt)("kbd",null,"Enter")," pour quitter."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(334).Z})),(0,l.kt)("p",null,"Red\xe9marrez dans votre syst\xe8me nouvellement install\xe9."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7380).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Et voil\xe0, c'est fait ! Archcraft est install\xe9 sur votre syst\xe8me. Profitez-en !")))}m.isMDXComponent=!0},5483:function(e,t,n){t.Z=n.p+"assets/images/1-12324f59ce88b4ca08dc344fa6212505.png"},9710:function(e,t,n){t.Z=n.p+"assets/images/10-0c86aed77bd3124d6e836589f3a7a3df.png"},9058:function(e,t,n){t.Z=n.p+"assets/images/11-94cec2647e24b3f5bf9162e0a72bdee3.png"},4540:function(e,t,n){t.Z=n.p+"assets/images/12-f7adbcb45c899e039c77d7c9745a8656.png"},7160:function(e,t,n){t.Z=n.p+"assets/images/13-7ce6f3d4373cf156c3818c5e9d44b298.png"},5366:function(e,t,n){t.Z=n.p+"assets/images/14-30122bae18205101e437a7e3b848b7c5.png"},6064:function(e,t,n){t.Z=n.p+"assets/images/15-a6abdb46eb8904ac9ec9bab9dd857c32.png"},464:function(e,t,n){t.Z=n.p+"assets/images/16-81a2f8c952c8d4edb07bcb667c825049.png"},4836:function(e,t,n){t.Z=n.p+"assets/images/17-c0b92841d87c9f3cef4430a60e16e496.png"},5149:function(e,t,n){t.Z=n.p+"assets/images/18-f1e07d9a208fa262e0df2ec4f0b5f604.png"},3770:function(e,t,n){t.Z=n.p+"assets/images/19-9f3e70d38b589016221ff5b25650f33d.png"},2826:function(e,t,n){t.Z=n.p+"assets/images/2-ca1ddfdad6bfac49d09894ffab937b64.png"},4092:function(e,t,n){t.Z=n.p+"assets/images/20-5ea7ea8482aeb586f0cb8beb8ec370e5.png"},6026:function(e,t,n){t.Z=n.p+"assets/images/21-72efda02228c5b37d3fd8803a9b90183.png"},3618:function(e,t,n){t.Z=n.p+"assets/images/22-58448f8652d4f963f818fc17cca5ea14.png"},7615:function(e,t,n){t.Z=n.p+"assets/images/23-5504c5e22e7e6beb8d77181c6499bc95.png"},7936:function(e,t,n){t.Z=n.p+"assets/images/24-4d5534f03b910f85973d69ca82e4b67f.png"},7301:function(e,t,n){t.Z=n.p+"assets/images/25-379e6ed8e95f7fbb1f64628b10bcff66.png"},2920:function(e,t,n){t.Z=n.p+"assets/images/26-26fd50c335dbd4c9772b3900b6da7bba.png"},3586:function(e,t,n){t.Z=n.p+"assets/images/27-12995db5fa351dad78e227819ec49aea.png"},1236:function(e,t,n){t.Z=n.p+"assets/images/28-98a527ddea0f069afef6dd5bcd323b09.png"},7919:function(e,t,n){t.Z=n.p+"assets/images/29-48506b0d281f25a04b102eaf7d51b479.png"},2985:function(e,t,n){t.Z=n.p+"assets/images/3-d29f910eec3784b7d055d2e0c1f5414d.png"},1847:function(e,t,n){t.Z=n.p+"assets/images/30-332683db71686349784a639331395b1d.png"},6280:function(e,t,n){t.Z=n.p+"assets/images/31-af6bdd9bc060e1bb609efbc436e30e22.png"},7835:function(e,t,n){t.Z=n.p+"assets/images/32-3d7a3218598575ccf7f91dfc03daf258.png"},1425:function(e,t,n){t.Z=n.p+"assets/images/33-866de8f5d4a2a8d815e78868e10c6322.png"},6230:function(e,t,n){t.Z=n.p+"assets/images/34-38d69cbd3461376712eefe09c14a0952.png"},98:function(e,t,n){t.Z=n.p+"assets/images/35-89dbbaf53f27a21fb3741ce1d2ee081d.png"},7054:function(e,t,n){t.Z=n.p+"assets/images/36-5cbe2d5f354ac65d46f346b01d6e625a.png"},4206:function(e,t,n){t.Z=n.p+"assets/images/37-8365f1333e48bce254d808215cfc6f91.png"},5695:function(e,t,n){t.Z=n.p+"assets/images/38-98896945a88cd179b8b3c981997c8fdb.png"},2832:function(e,t,n){t.Z=n.p+"assets/images/39-14ef299f1db3c0cf104d3161a5738e66.png"},3930:function(e,t,n){t.Z=n.p+"assets/images/4-cb3362d9fe928f83b4b2f804542c875c.png"},3259:function(e,t,n){t.Z=n.p+"assets/images/40-09bd41809a2f8956556c2efbd8e1a035.png"},2039:function(e,t,n){t.Z=n.p+"assets/images/41-f5167623c165196fbc4a721d539ad75a.png"},8216:function(e,t,n){t.Z=n.p+"assets/images/42-927ab47e553c7a11e78b793bdc9d5685.png"},7001:function(e,t,n){t.Z=n.p+"assets/images/43-6612e95273a21f6b5dd2255b8013d95f.png"},9849:function(e,t,n){t.Z=n.p+"assets/images/44-baa756ac9f0a2c8d86a0261ac5d918c4.png"},4861:function(e,t,n){t.Z=n.p+"assets/images/45-9c308e1fdfe3a2e4597e95bded3be45d.png"},1851:function(e,t,n){t.Z=n.p+"assets/images/46-9ec2c12091058f331d00ac56d8290d20.png"},1581:function(e,t,n){t.Z=n.p+"assets/images/47-0ab1279f611b1e3fb25cc1f840eac176.png"},6598:function(e,t,n){t.Z=n.p+"assets/images/48-23235e2b6891dd9de4af2419746e88c0.png"},9851:function(e,t,n){t.Z=n.p+"assets/images/49-309c06690ac33a9cfb246e45a3bf61b0.png"},1406:function(e,t,n){t.Z=n.p+"assets/images/5-40e427a215ea04307b0e36e32467ed4a.png"},2583:function(e,t,n){t.Z=n.p+"assets/images/50-341e1440163d838dd8572c62ff8f6a46.png"},6612:function(e,t,n){t.Z=n.p+"assets/images/51-f09c9e09d9031bc17555cbbb5c6bbd2c.png"},4087:function(e,t,n){t.Z=n.p+"assets/images/52-dcf85ec78de0e9dfc558e49bcc862ea8.png"},8579:function(e,t,n){t.Z=n.p+"assets/images/53-70ee3e3fc2cb70e0c3152716dcf1b8a4.png"},2715:function(e,t,n){t.Z=n.p+"assets/images/54-13c0d4c403e709054c4ed2ca67300a05.png"},4771:function(e,t,n){t.Z=n.p+"assets/images/55-dfb504a5193eba43ce8a837db55c2547.png"},7057:function(e,t,n){t.Z=n.p+"assets/images/56-c636a5cd02967482de5405b836fcbbae.png"},5791:function(e,t,n){t.Z=n.p+"assets/images/57-0a2f994dfe74083a71adea3d3b41f0ba.png"},64:function(e,t,n){t.Z=n.p+"assets/images/58-7b5d57cefd07566cc32899292b82a0cc.png"},6641:function(e,t,n){t.Z=n.p+"assets/images/59-83d9e2e0937071fc5154499b6af1bc58.png"},8533:function(e,t,n){t.Z=n.p+"assets/images/6-8b6542617b214a06449fa510730ef9ee.png"},9952:function(e,t,n){t.Z=n.p+"assets/images/60-76f34291d179728d678dfa242c198319.png"},3582:function(e,t,n){t.Z=n.p+"assets/images/61-0c5b9bc9c64b6d61fc6a069930060476.png"},3669:function(e,t,n){t.Z=n.p+"assets/images/62-e567fd551522f7d707cba14a5b38e71b.png"},9509:function(e,t,n){t.Z=n.p+"assets/images/63-137dcebe9c51d901799ec5c4bc668717.png"},1639:function(e,t,n){t.Z=n.p+"assets/images/64-414da8986b822123f19f3b367754137d.png"},7891:function(e,t,n){t.Z=n.p+"assets/images/65-761bf6833d30ce9abd4b738a1f2a2205.png"},6351:function(e,t,n){t.Z=n.p+"assets/images/66-c2b39355718a2eb4ac31e0b388859ec4.png"},9766:function(e,t,n){t.Z=n.p+"assets/images/67-892ca61586d6262219a8126188803778.png"},4034:function(e,t,n){t.Z=n.p+"assets/images/68-18e113702929b2bcf47fe62171cc3cae.png"},7040:function(e,t,n){t.Z=n.p+"assets/images/69-a8edff98c80172cca4289dda206c3c73.png"},5919:function(e,t,n){t.Z=n.p+"assets/images/7-b237f5b0764336403c6b8e59fd888b77.png"},9177:function(e,t,n){t.Z=n.p+"assets/images/70-479d43b29db1e455416e794c974243bd.png"},6946:function(e,t,n){t.Z=n.p+"assets/images/71-67c5370fbe1f1d527de1818d3ac2a529.png"},1274:function(e,t,n){t.Z=n.p+"assets/images/72-5bd8f4d69709de49df5eac4a136e2180.png"},6464:function(e,t,n){t.Z=n.p+"assets/images/73-f3d1e9bcf0a2331e76fad021e5b9bc22.png"},334:function(e,t,n){t.Z=n.p+"assets/images/74-023f72469808bd79eff56609ec9a9837.png"},7380:function(e,t,n){t.Z=n.p+"assets/images/75-805f7b5c138e55517fba648e7db219d7.png"},0:function(e,t,n){t.Z=n.p+"assets/images/8-47de5d10219a739d4a30863e6fb2696b.png"},9771:function(e,t,n){t.Z=n.p+"assets/images/9-1bd7d8ab29eeff428a59c61c1829737b.png"}}]);