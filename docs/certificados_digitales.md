---
id: certificados_digitales
title: Certificados Digitales
---

A través de Verónica, usted podrá autogestionar los certificados digitales de sus empresas. Dentro del conjunto de servicios de tipo RESTful, usted encontrará funcionalidades que le permitirán crear, listar o eliminar todas sus firmas electrónicas.

Por cuestiones de seguridad, una vez creada una firma electrónica en Verónica, usted ya no podrá descargarla.

## Creación
Antes de poder empezar la emisión de comprobantes electrónicos, es importante que usted registre su archivo de firma electrónica asociado a su R.U.C. emisor. Para esto, por favor seguir los siguientes pasos:

1. Dentro de la suite de servicios RESTful, usted encontrará el grupo de `Certificados digitales`. Haga clic en la sección indicada en la figura siguiente, en donde podrá ver tres diferentes servicios que le permitirán eliminar, listar y crear una firma electrónica respectivamente.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-certificados-1.jpg" width="700"/>

2. Haga clic en la opción para crear una nueva firma electrónica y a continuación haga clic en el botón `Try it out`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-certificados-2.jpg" width="700"/>

3. Esto le habilitará la opción para indicar los valores asociados a su certificado digital. En este punto es importante contar con el archivo de extensión `.p12` así como la contraseña del mismo. A continuación, deberá seguir los siguentes pasos:

   3.1 Los valores indicados deberán ser llenados del siguiente modo:

   | Variable     | Descripción                                                 |
   | :----------- | :------------------------------------------------------------ |
   | `Certificado`      | Archivo .p12 codificado en base 64 (https://www.browserling.com/tools/file-to-base64) |
   | `Descripción`      | Una breve descripción de su archivo, por ejemplo `Firma de pruebas` |
   | `Password`      | Contraseña del archivo de firma electrónica |

   3.2 Se deberá indicar también el número de R.U.C. al que se encuentra asociado dicho certificado de firma.

   3.3 Finalmente, deberá hacer clic en el botón `Execute` para subir su firma electrónica.

<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-certificados-3.jpg" width="700"/>

## Lectura
1. Una vez creado su certificado digital, usted podrá consultar si fue dado de alta exitosamente. Para esto, seguir los siguientes pasos:
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-certificados-4.jpg" width="700"/>

2. Deberá dejar los valores por defecto y a continuación hacer clic en el botón `Execute`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-certificados-5.jpg" width="700"/>

3. Si su certificado fue dado de alta satisfactoriamente, deberá visualizar algo parecido a lo mostrado en la imagen siguiente:
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-certificados-6.jpg" width="700"/>