---
id: swagger
title: Swagger
sidebar_label: Swagger
---

Swagger es un framework para la documentación automatizada y generación de casos de prueba de servicios web RESTful. Swagger se usa junto con un conjunto de herramientas de software de código abierto para diseñar, construir, documentar y usar servicios web RESTful.

Verónica, a través de su interfaz Swagger, pone a disposición de sus usuarios un ambiente de pruebas disponible en [https://api-sbox.veronica.ec/swagger-ui.html](https://api-sbox.veronica.ec/swagger-ui.html), el cual le permitirá utilizar todos los servicios existentes sin la necesidad de crear scripts o programas para su consumo.

:::note Importante
Cualquier comprobante emitido a través del ambiente de pruebas de Verónica no tendrá validez tributaria y tampoco afectará su contabilidad.
:::

Para poder autenticarnos en Swagger y utilizar Verónica, debemos seguir los pasos que se muestran a continuación.

* Hacer clic en el botón `Authorize`, tal como se muestra en `1`.
<img src="https://i.imgur.com/ErHWy2Q.png"/>

* Al realizar la acción anterior, se mostrará un cuadro de diálogo en donde el usuario deberá ingresar su nombre de usuario, password, client_id y client_secret en `2`, `3`, `4` y `5` respectivamente.
<img src="https://i.imgur.com/gaIOQFE.png"/>

* A continuación, se deberá hacer clic en el botón `Authorize`, tal como se indica en `6`, para validar que las credenciales ingresadas sean correctas y obtener el token que nos permitirá consumir la API RESTful de Verónica.
<img src="https://i.imgur.com/zwNWMJn.png"/>

* Finalmente, si el proceso de autenticación se ejecutó satisfactoriamente, observaremos el siguiente diálogo de confirmación. En este punto, el usuario puede proceder a cerrar dicha ventana haciendo clic en el botón `Close` tal como se muestra en `7` para empezar a consumir los servicios RESTful.
<img src="https://i.imgur.com/RTrCG0z.png"/>

:::info INFORMACIÓN
Es importante mencionar que si la página es refrescada, el proceso de autenticación descrito anteriormente deberá volver a ser ejecutado.
:::