---
id: creacion
title: Creación
sidebar_label: Creación
---

:::info INFORMACIÓN
Sólo se puede tener un solo certificado digital asociado a un número de R.U.C. por cada usuario de la plataforma
:::

Los certificados digitales son los componentes que nos permitirán firmar electrónicamente nuestros comprobantes fiscales. Dentro del conjunto de servicios RESTful de Verónica, usted encontrará la sección de `Certificados digitales`, la cual se encarga de gestionar estos componentes; para esto debemos seguir los siguientes pasos:

* Haga clic en `1`, se desplegarán las distintas operaciones que se pueden realizar sobre los archivos de firma digital.
<img src="https://i.imgur.com/dDxR2WQ.png"/>

* Seleccionar la opción que se muestra en `2`.
<img src="https://i.imgur.com/rgCSgHK.png"/>

* A continuación, debemos hacer clic en el botón `Try it out` tal como se muestra en `3`. Esto nos desplegará un panel en donde se visualizarán los campos que se requieren para la creación de un certificado digital.

El objeto JSON mostrado a continuación es un ejemplo de una solicitud para la creación de un certificado digital.

```json
{
  "certificado": "string",//Contenido del archivo de extensión .P12 codificado en base64 (https://www.browserling.com/tools/file-to-base64)
  "descripcion": "string",//Breve descripción del archivo, por ejemplo: Archivo para pruebas
  "password": "string"//Contraseña del archivo .P12
}
```

<img src="https://i.imgur.com/2G0D6PL.png"/>

* Una vez ingresados los datos requeridos en `4`, procederemos a ingresar en `5` el número de R.U.C. al que se encuentra asociado el certificado digital.

<img src="https://i.imgur.com/7isqHT2.png"/>

* Posteriormente, se hará clic en el botón `Execute`, tal como se muestra en `6`.

<img src="https://i.imgur.com/ZrNWscL.png"/>

* Finalmente, si los datos ingresados fueron correctos, Verónica retornará un identificador único que se asociará a nuestro certificado digital.

<img src="https://i.imgur.com/NCmFC94.png"/>