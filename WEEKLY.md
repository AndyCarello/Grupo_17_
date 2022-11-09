## 7/11/22 ##

### Novedades ###

- Se actualizo el tablero de trabajo
- Se actualizo el archivo retro.md
- Se actualizo el archivo WEEKLY.MD
- Se recibio la correccion del Sprint anterior y quedaron cosas para terminar, se añadio tarjeta al sprint 6 como prioridad.
## 2/11/22 ##

### Novedades ###
- saqué el requerido del formulario de login para seguir el mismo criterio que Facu
- implemente la verificacionnde usuario y contraseña en el login
- arme 3 middlewares: admin, invitado, registrado; para que redireccione según corresponda
- arme un middleware de app para que tenga los datos de sesion a nivel locals
- modifique ejs de header para que muestre opciones de registro/ingreso o perfil/salir, segun corresponda
- modifique ejs de productos para que muestre links segun si es invitado, registrado o admin
- hice un usuario registrado@ sucre.com.ar y uno administrador@ sucre.com.ar; ambos con contraseña 1234
- modifique como se genera el id de usuario nuevo pars que no se pisen si se borra alguno.

## 7/10/22 ##

### Novedades ###

- Revisar todas las rutas que tenemos hoy para productos y asegurarnos de que sean las definitivas 
- Hacer  una lista de todas las rutas y cada req por cada una y definir la acción a tomar según sea invitado registrado o administrador. 
- Implementar la entidad de usuarios (implementar las rutas el controlador las rutas)(Ya esta)
- Implementar el registro de usuarios
- Identificar todos los campos que  necesitamos
- Definir que validación lleva cada campo
- Definir donde se van a mostrar los errores y en que formato
- Modificar las maquetas y estilos para que exista ese espacio 
- Implementar el registro
- Mostrar los errores donde corresponde
- Hacer las redirecciones necesarias
- Implementar el Login de usuarios
- Identificar todos los campos que  necesitamos
- Definir que validacion lleva cada campo
-  Definir donde se van a mostrar los errores y en que formato
- Modificar las maquetas y estilos para que exista ese espacio
- Implementar el registro
- Mostrar los errores donde corresponde
- Hacer las redirecciones necesarias

- Recordar usuario 
Rutas de huéspedes y usuarios

## 5/10/22 ##

### Novedades ###

- Facu hizo el actualizar y el eliminar
- Anto hizo listado y detalle en conjunto con Andy
- Andy hizo crear, multer y method override
- Falta contenido de usuarios.json
- Falta que se eliminen las imágenes de productos actualizados o borrados de la carpeta
- Generar una carpeta dentro de img donde se guarden las imágenes que no son estáticas y modificar las rutas que hagan falta

## 23/09/22 ##

### Novedades ###

- Se termino la vista de productos.
- Se terminaron los estilos de productos.

### Pendientes del Sprint 3 ###

- Arreglar footer para que sea 100% responsive.
- Quitar la etiqueta <head> del footer y hacer el include. 
- Darle al form de contacto los mismos estilos que los demas forms.

## 21/09/22 ##

### Novedades ###

- Nos reunimos en la clase, hablamos sobre los faltantes para que el sprint 3 quede terminado  y planificamos el Sprint 4, se armo el tablero de trabajo y se dividieron las tareas.
- Se actualizo el archivo retro.md
- Se armo la carpeta data con los archivos productos.json y usuarios.json

### Pendientes del Sprint 3 ###

- Terminar la vista de productos
- Terminar los estilos de productos
- Arreglar footer para que sea 100% responsive
- Darle al form de contacto los mismos estilos que los demas forms
## 18/09/22 ##
### Novedades ###

- Hice formulario de creacion de producto, no esta enlazado desde ningun lado. Seria bueno agregar un boton desde la pagina de productos.
- Hice formulario de modificacion de producto, esta enlazado desde el detalle de producto. Solo deberia verse cuando este logueado un administrador.
- Puse boton para eliminar el producto al final del formulario de actualizacion. Deberia pedir una confirmacion antes de eliminarlo. 
- Hice la vista de producto y esta enrutada.
- Aplique un fondo blanco en el carrito para que corte la monotonia.


## 12/09/22 ##

- Se implemento la Weekly y se redacto el archivo Weekly.md 
- Se identificaron las cosas que faltan para poder cumplir con la entrega del Sprint 3 que se paso al 19/09.
### Cosas que Faltan ###

-    Terminar la vista de Productos, con su correspondiente ruta y controlador
-    El formulario ABM 
-    La vista de Producto con su correspondiente ruta y controlador
-    Incluir los partials  en algunas secciones
-    Corregir el footer para que sea 100% responsive
-    Agregar archivo weekly. 
-    Terminar los estilos del carrito
-    Aplicarle al form de contacto los mismos estilos que los otros form

## 07/09/22 ##

### Novedades ###

- Se instalo Ejs
- Se subio a Heroku
- Se identificaron los partials
- Dentro de Views se armaron las carpetas de Usuarios y Productos

