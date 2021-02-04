# SRI
Dentro del proceso de facturación electrónica de Ecuador, existen dos pasos importantes que implican interacción con la autoridad tributaria del país; estos son: la emisión y autorización.

1. Ambos pasos son implementados en Verónica a través de llamadas de tipo RESTful, tal como se muestra en la imagen siguiente:
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-sri-1.jpg" width="600">

2. Para validar un comprobante ante el SRI deberemos ejecutar el proceso de envío que se muestra a continuación:
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-sri-2.jpg" width="600">

3. Luego, deberemos indicar la clave de acceso de nuestro comprobante y hacer clic en el botón `Execute`; si el comprobante no contiene errores, obtendremos la respuesta de `RECIBIDA`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-sri-3.jpg" width="600">

4. A cotninuación, para darle validez tributaria a nuestro comprobante, se deberá ejecutar la siguiente llamada:
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-sri-4.jpg" width="600">

5. Especificaremos la clave de acceso y luego clic en el botón `Execute`. Si el comprobante está correcto, obtendremos el estado de `AUTORIZADO`.
<img src="https://raw.githubusercontent.com/rp-consulting/veronica-api-doc/main/static/veronica-sri-5.jpg" width="600">