# Notificaciones
Cuando se crea un comprobante electrónico en Verónica, debemos definir en la sección `campoAdicional` la dirección de correo electrónico de la persona o personas que se quiere notificar. Esto nos permitirá posteriormente notificar de manera automática sólo con la clave de acceso a un comprobante electrónico.
```json
{
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
Los pasos a seguir son:

1. Hacer clic en el servicio RESTful de notificación y luego en el botón `Try it out`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-notificaciones-1.jpg" width="600">

2. Especificar la clave de acceso y hacer clic en el botón `Execute`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-notificaciones-2.jpg" width="600">