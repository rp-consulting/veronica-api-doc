# Comprobantes
En esta sección se describirá el proceso de creación de comprobantes electrónicos utilizando el formato Json. Dado que el proceso es el mismo para los 6 tipos de comprobantes, sólo se ejemplificará el caso de las facturas.

Para esto, se deberá seguir los siguiente pasos:

1. Hacer clic en la sección `Comprobantes` y a continuación dirigirse a la opción `Crear una factura`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-1.jpg" width="600">

2. Hacer clic en el botón `Try it out`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-2.jpg" width="600">

3. Especificar los datos del comprobante utilizando el ejemplo de factura en formato Json mostrado a continuación. En este objeto, se deberá cambiar los campos `ruc`, `fechaEmision`, `secuencial` y `campoAdicional/value` por su número de R.U.C., la fecha actual, el secuencial correspondiente y el el correo del receptor de la factura.

```json
{
  "id":"comprobante",
  "version":"1.1.0",
  "infoTributaria":{
    "ambiente":"1",
    "tipoEmision":"1",
    "razonSocial":"Suministros Nacionales S.A.",
    "nombreComercial":"Empresa Importadora y Exportadora de Piezas",
    "ruc":"",
    "codDoc":"01",
    "estab":"001",
    "ptoEmi":"001",
    "secuencial":"000000001",
    "dirMatriz":"Enrique Guerrero Portilla OE1-34 AV. Galo Plaza Lasso"
  },
  "infoFactura":{
    "fechaEmision":"03/02/2021",
    "dirEstablecimiento":"Sebastián Moreno S/N Francisco García",
    "contribuyenteEspecial":"5368",
    "obligadoContabilidad":"SI",
    "tipoIdentificacionComprador":"04",
    "guiaRemision":"001-001-000000001",
    "razonSocialComprador":"PRUEBAS SERVICIO DE RENTAS INTERNAS",
    "identificacionComprador":"1713328506001",
    "direccionComprador":"salinas y santiago",
    "totalSinImpuestos":19.00,
    "totalDescuento":0.00,
    "totalImpuesto":[
      {
        "codigo":"2",
        "codigoPorcentaje":"2",
        "baseImponible":19.00,
        "valor":2.28
      }
    ],
    "propina":0,
    "importeTotal":21.28,
    "moneda":"DOLAR",
    "pagos":[
      {
        "formaPago":"20",
        "total":21.28,
        "plazo":"0",
        "unidadTiempo":"dias"
      }
    ],
    "valorRetIva":0.00,
    "valorRetRenta":0.00
  },
  "detalle":[
    {
      "codigoPrincipal":"125BJC-01",
      "codigoAuxiliar":"1234D56789-A",
      "descripcion":"CAMIONETA 4X4 DIESEL 3.7",
      "cantidad":1.0,
      "precioUnitario":19.00,
      "descuento":0.00,
      "precioTotalSinImpuesto":19.00,
      "detAdicional":[
        {
          "nombre":"Marca Chevrolet",
          "valor":"Chevrolet"
        },
        {
          "nombre":"Modelo",
          "valor":"2012"
        },
        {
          "nombre":"Chasis",
          "valor":"8LDETA03V20003289"
        }
      ],
      "impuesto":[
        {
          "codigo":"2",
          "codigoPorcentaje":"2",
          "tarifa":12,
          "baseImponible":19.00,
          "valor":2.28
        }
      ]
    }
  ],
  "campoAdicional":[
    {
      "nombre":"Codigo Impuesto ISD",
      "value":"4580"
    },
    {
      "nombre":"Impuesto ISD",
      "value":"15.42x"
    },
    {
      "nombre":"emailCliente",
      "value":""
    }
  ]
}
```

4. Si la ejecución fue correcta, se desplegará la clave de acceso del comprobante tal como se muestra a continuación. A partir de este momento, cualquier operación que se requiera hacer con la factura, se podrá realizar sólo indicando la clave de acceso.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-3.jpg" width="600">

5. También podemos utilizar la opción que retorna los archivos asociados a la factura, tal como se muestra en la imagen.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-4.jpg" width="600">

6. Por ejemplo, si queremos consultar el XML, bastará con realizar la siguiente acción:
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-5.jpg" width="600">

7. Una vez ejecutada la solicitud, se podrá ver a continuación el XML de nuestro comprobante.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-6.jpg" width="600">

<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-7.jpg" width="600">

8. Los mismos pasos se pueden ejecutar para obtener el documento en formato PDF.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-facturas-8.jpg" width="600">