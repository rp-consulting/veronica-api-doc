(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return r})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return p}));var o=a(3),t=a(7),i=(a(0),a(104)),c={id:"comprobantes",title:"Comprobantes"},r={unversionedId:"comprobantes",id:"comprobantes",isDocsHomePage:!1,title:"Comprobantes",description:"En esta secci\xf3n se describir\xe1 el proceso de creaci\xf3n de comprobantes electr\xf3nicos utilizando el formato Json. Dado que el proceso es el mismo para los 6 tipos de comprobantes, s\xf3lo se ejemplificar\xe1 el caso de las facturas.",source:"@site/docs/comprobantes.md",slug:"/comprobantes",permalink:"/docs/comprobantes",version:"current",sidebar:"someSidebar",previous:{title:"Login",permalink:"/docs/"},next:{title:"Certificados Digitales",permalink:"/docs/certificados_digitales"}},s=[],l={toc:s};function p(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"En esta secci\xf3n se describir\xe1 el proceso de creaci\xf3n de comprobantes electr\xf3nicos utilizando el formato Json. Dado que el proceso es el mismo para los 6 tipos de comprobantes, s\xf3lo se ejemplificar\xe1 el caso de las facturas."),Object(i.b)("p",null,"Para esto, se deber\xe1 seguir los siguiente pasos:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Hacer clic en la secci\xf3n ",Object(i.b)("inlineCode",{parentName:"p"},"Comprobantes")," y a continuaci\xf3n dirigirse a la opci\xf3n ",Object(i.b)("inlineCode",{parentName:"p"},"Crear una factura"),"."),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-1.jpg",width:"600"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Hacer clic en el bot\xf3n ",Object(i.b)("inlineCode",{parentName:"p"},"Try it out"),"."),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-2.jpg",width:"600"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Especificar los datos del comprobante utilizando el ejemplo de factura en formato Json mostrado a continuaci\xf3n. En este objeto, se deber\xe1 cambiar los campos ",Object(i.b)("inlineCode",{parentName:"p"},"ruc"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fechaEmision"),", ",Object(i.b)("inlineCode",{parentName:"p"},"secuencial")," y ",Object(i.b)("inlineCode",{parentName:"p"},"campoAdicional/value")," por su n\xfamero de R.U.C., la fecha actual, el secuencial correspondiente y el el correo del receptor de la factura."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"comprobante",\n  "version":"1.1.0",\n  "infoTributaria":{\n    "ambiente":"1",\n    "tipoEmision":"1",\n    "razonSocial":"Suministros Nacionales S.A.",\n    "nombreComercial":"Empresa Importadora y Exportadora de Piezas",\n    "ruc":"",\n    "codDoc":"01",\n    "estab":"001",\n    "ptoEmi":"001",\n    "secuencial":"000000001",\n    "dirMatriz":"Enrique Guerrero Portilla OE1-34 AV. Galo Plaza Lasso"\n  },\n  "infoFactura":{\n    "fechaEmision":"03/02/2021",\n    "dirEstablecimiento":"Sebasti\xe1n Moreno S/N Francisco Garc\xeda",\n    "contribuyenteEspecial":"5368",\n    "obligadoContabilidad":"SI",\n    "tipoIdentificacionComprador":"04",\n    "guiaRemision":"001-001-000000001",\n    "razonSocialComprador":"PRUEBAS SERVICIO DE RENTAS INTERNAS",\n    "identificacionComprador":"1713328506001",\n    "direccionComprador":"salinas y santiago",\n    "totalSinImpuestos":19.00,\n    "totalDescuento":0.00,\n    "totalImpuesto":[\n      {\n        "codigo":"2",\n        "codigoPorcentaje":"2",\n        "baseImponible":19.00,\n        "valor":2.28\n      }\n    ],\n    "propina":0,\n    "importeTotal":21.28,\n    "moneda":"DOLAR",\n    "pagos":[\n      {\n        "formaPago":"20",\n        "total":21.28,\n        "plazo":"0",\n        "unidadTiempo":"dias"\n      }\n    ],\n    "valorRetIva":0.00,\n    "valorRetRenta":0.00\n  },\n  "detalle":[\n    {\n      "codigoPrincipal":"125BJC-01",\n      "codigoAuxiliar":"1234D56789-A",\n      "descripcion":"CAMIONETA 4X4 DIESEL 3.7",\n      "cantidad":1.0,\n      "precioUnitario":19.00,\n      "descuento":0.00,\n      "precioTotalSinImpuesto":19.00,\n      "detAdicional":[\n        {\n          "nombre":"Marca Chevrolet",\n          "valor":"Chevrolet"\n        },\n        {\n          "nombre":"Modelo",\n          "valor":"2012"\n        },\n        {\n          "nombre":"Chasis",\n          "valor":"8LDETA03V20003289"\n        }\n      ],\n      "impuesto":[\n        {\n          "codigo":"2",\n          "codigoPorcentaje":"2",\n          "tarifa":12,\n          "baseImponible":19.00,\n          "valor":2.28\n        }\n      ]\n    }\n  ],\n  "campoAdicional":[\n    {\n      "nombre":"Codigo Impuesto ISD",\n      "value":"4580"\n    },\n    {\n      "nombre":"Impuesto ISD",\n      "value":"15.42x"\n    },\n    {\n      "nombre":"emailCliente",\n      "value":""\n    }\n  ]\n}\n')),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-3.jpg",width:"600"}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Si la ejecuci\xf3n fue correcta, se desplegar\xe1 la clave de acceso del comprobante tal como se muestra a continuaci\xf3n. A partir de este momento, cualquier operaci\xf3n que se requiera hacer con la factura, se podr\xe1 realizar s\xf3lo indicando la clave de acceso."),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-4.jpg",width:"600"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Tambi\xe9n podemos utilizar la opci\xf3n que retorna los archivos asociados a la factura. Por ejemplo, si queremos consultar el XML, bastar\xe1 con realizar la siguiente acci\xf3n:"),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-5.jpg",width:"600"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Una vez especificada la clave de acceso, se podr\xe1 obtener el XML de nuestro comprobante."),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-6.jpg",width:"600"}))),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-7.jpg",width:"600"}),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"Los mismos pasos se pueden ejecutar para obtener el documento en formato PDF.")),Object(i.b)("img",{src:"https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-8.\njpg",width:"600"}))}p.isMDXComponent=!0}}]);