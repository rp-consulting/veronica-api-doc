---
id: login
title: Autenticación
sidebar_label: Login
slug: /
---

`Verónica API` implementa como parte de su proceso de autenticación, el estándar OAuth 2.0 con el flujo de propietario de la contraseña; esto quiere decir que para poder obtener un token que nos permita hacer uso de los distintos servicios RESTful, deberemos brindar un conjunto de credenciales que interacturán entre sí para autenticar al usuario. Estas credenciales que se detallan a continuación les serán brindadas al momento que solicite su alta a `Verónica API`. Si no las tiene o las olvidó, por favor contactarse a [support@rolandopalermo.com](mailto:support@rolandopalermo.com).
```
Usuario
Contraseña
Identificador de cliente
Contraseña de cliente
```
Para realizar el proceso de autenticación en la interfaz de Swagger, por favor, realizar los siguiente pasos:

1. Hacer clic en el botón `Authorize`, tal como se muestra en la figura.

<img src="https://i.imgur.com/ErHWy2Q.png"/>

2. Ingresar las credenciales correspondientes a su usuario.

<img src="https://i.imgur.com/gaIOQFE.png"/>

3. Hacer clic en el botón `Authorize`, tal como se muestra a continuación.

<img src="https://i.imgur.com/zwNWMJn.png"/>

4. Si las credenciales fueron correctas, observará el cuadro de diálogo mostrado a continuación. En este punto, puede hacer clic en el botón `Close` puesto que ya estará habilitado para utilizar la plataforma de facturación.

<img src="https://i.imgur.com/RTrCG0z.png"/>