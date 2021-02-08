---
id: curl
title: cURL
sidebar_label: cURL
---

Otra opción para obtener un token que nos permita utilizar la API RESTful de Verónica es a través de cURL, sin embargo esta opción se recomienda sólo para usuarios experimentados en el consumo de servicios de tipo RESTful.

Para ejecutar la llamada cURL, necesitaremos tener a la mano las siguientes credenciales:

| Nombre                  | Descripción                                                          |
|-------------------------|----------------------------------------------------------------------|
| ${usuario}              | Nombre del usuario de la API                                         |
| ${contraseña}           | Contraseña del usuario de la API                                     |
| ${credenciales_cliente} | Representa el formato `client_id:client_secret` codificado en Base64 |

Con estos valores, procederemos a la ejecución del siguiente comando cURL:

```shell
curl --location --request POST 'http://api-sbox.veronica.ec/api/v1.0/oauth/token?username=${usuario}&password=${contraseña}&grant_type=password' \
--header 'Authorization: Basic ${credenciales_cliente}'
```

Por ejemplo, si nuestras credenciales de acceso fueran:

| Nombre        | Valor         |
|---------------|---------------|
|  Usuario      | 9999999999999 |
| Contraseña    | v4r0n1c4      |
| Client_id     | mi_app_id     |
| Client_secret | mi_app_secret |

Entonces, de acuerdo a primera tabla, deberemos codificar en Base64 las credenciales del cliente que serían `mi_app_id:mi_app_secret`, dando como resultado:

```shell
bWlfYXBwX2lkOm1pX2FwcF9zZWNyZXQ=
```

Y nuestro comando cURL debería ser:

```shell
curl --location --request POST 'http://api-sbox.veronica.ec/api/v1.0/oauth/token?username=9999999999999&password=v4r0n1c4&grant_type=password' \
--header 'Authorization: Basic bWlfYXBwX2lkOm1pX2FwcF9zZWNyZXQ='
```

A continuación, si el comando cURL se ejecutara satisfactoriamente, la respuesta debería ser similar al objeto JSON mostrado a continuación:
```json
{
    "access_token": "cd66ad06-11c3-43f1-sa2c-876e6dd877e2",
    "token_type": "bearer",
    "refresh_token": "336752cf-3aee-4f83-8183-g4c630a7a11b",
    "expires_in": 43199,
    "scope": "read write"
}
```

Todas las llamadas posteriores a la API RESTful de Verónica deberán llevar como cabecera `Authorization: Bearer ${access_token}`, donde `${access_token}` representa el valor de la propiedad `access_token` del objeto JSON mostrado anteriormente.