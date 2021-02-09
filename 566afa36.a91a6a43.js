(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(105)),o={id:"curl",title:"cURL",sidebar_label:"cURL"},l={unversionedId:"autenticacion/curl",id:"autenticacion/curl",isDocsHomePage:!1,title:"cURL",description:"Otra opci\xf3n para obtener un token que nos permita utilizar la API RESTful de Ver\xf3nica es a trav\xe9s de cURL, sin embargo esta opci\xf3n se recomienda s\xf3lo para usuarios experimentados en el consumo de servicios de tipo RESTful.",source:"@site/docs/autenticacion/curl.md",slug:"/autenticacion/curl",permalink:"/veronica-api-doc/docs/autenticacion/curl",version:"current",sidebar_label:"cURL"},i=[],b={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Otra opci\xf3n para obtener un token que nos permita utilizar la API RESTful de Ver\xf3nica es a trav\xe9s de cURL, sin embargo esta opci\xf3n se recomienda s\xf3lo para usuarios experimentados en el consumo de servicios de tipo RESTful."),Object(c.b)("p",null,"Para ejecutar la llamada cURL, necesitaremos tener a la mano las siguientes credenciales:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Nombre"),Object(c.b)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"${usuario}"),Object(c.b)("td",{parentName:"tr",align:null},"Nombre del usuario de la API")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"${contrase\xf1a}"),Object(c.b)("td",{parentName:"tr",align:null},"Contrase\xf1a del usuario de la API")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"${credenciales_cliente}"),Object(c.b)("td",{parentName:"tr",align:null},"Representa el formato ",Object(c.b)("inlineCode",{parentName:"td"},"client_id:client_secret")," codificado en Base64")))),Object(c.b)("p",null,"Con estos valores, procederemos a la ejecuci\xf3n del siguiente comando cURL:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://api-sbox.veronica.ec/api/v1.0/oauth/token?username=${usuario}&password=${contrase\xf1a}&grant_type=password' \\\n--header 'Authorization: Basic ${credenciales_cliente}'\n")),Object(c.b)("p",null,"Por ejemplo, si nuestras credenciales de acceso fueran:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Nombre"),Object(c.b)("th",{parentName:"tr",align:null},"Valor"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Usuario"),Object(c.b)("td",{parentName:"tr",align:null},"9999999999999")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Contrase\xf1a"),Object(c.b)("td",{parentName:"tr",align:null},"v4r0n1c4")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Client_id"),Object(c.b)("td",{parentName:"tr",align:null},"mi_app_id")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Client_secret"),Object(c.b)("td",{parentName:"tr",align:null},"mi_app_secret")))),Object(c.b)("p",null,"Entonces, de acuerdo a primera tabla, deberemos codificar en Base64 las credenciales del cliente que ser\xedan ",Object(c.b)("inlineCode",{parentName:"p"},"mi_app_id:mi_app_secret"),", dando como resultado:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"bWlfYXBwX2lkOm1pX2FwcF9zZWNyZXQ=\n")),Object(c.b)("p",null,"Y nuestro comando cURL deber\xeda ser:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://api-sbox.veronica.ec/api/v1.0/oauth/token?username=9999999999999&password=v4r0n1c4&grant_type=password' \\\n--header 'Authorization: Basic bWlfYXBwX2lkOm1pX2FwcF9zZWNyZXQ='\n")),Object(c.b)("p",null,"A continuaci\xf3n, si el comando cURL se ejecutara satisfactoriamente, la respuesta deber\xeda ser similar al objeto JSON mostrado a continuaci\xf3n:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "cd66ad06-11c3-43f1-sa2c-876e6dd877e2",\n    "token_type": "bearer",\n    "refresh_token": "336752cf-3aee-4f83-8183-g4c630a7a11b",\n    "expires_in": 43199,\n    "scope": "read write"\n}\n')),Object(c.b)("p",null,"Todas las llamadas posteriores a la API RESTful de Ver\xf3nica deber\xe1n llevar como cabecera ",Object(c.b)("inlineCode",{parentName:"p"},"Authorization: Bearer ${access_token}"),", donde ",Object(c.b)("inlineCode",{parentName:"p"},"${access_token}")," representa el valor de la propiedad ",Object(c.b)("inlineCode",{parentName:"p"},"access_token")," del objeto JSON mostrado anteriormente."))}s.isMDXComponent=!0}}]);