# Tripleten web_project_around_auth

En este proyecto de React se aplicó la autenticación
y autorización de usuarios.

Se ha instalado e importado la última versión de react-router-dom
que proporciona el componente integrado Routes para envolver las rutas,
comparándolas de manera exclusiva y renderizando sólo una de ellas en
cada ruta.

El componente integrado Route se utiliza tres veces, una para cada
componente creado, Main, login y register. Cada ruta con su
respectivo endpoint.

Se creó el componente ProtectedRoute que, como bien dice su nombre,
protege la ruta raíz que contiene toda la interfaz principal de la
página y su funcionalidad en el componente Main. ProtectedRoute hace
uso del componente integrado Navigate que redirige al usuario a
iniciar sesión si no lo ha hecho aún, dependiendo de la variable de
estado loggedIn. El children de ProtectedRoute es Main, junto con
los componentes encargados de renderizar sus popups.

Debido a la creación de componentes funcionales, también se utiliza
el hook useNavigate para dirigir a los usuarios a las diferentes rutas.
Por ejemplo: Cuando un usuario se registra exitosamente, se abre un
popup con un mensaje de éxito; al cerrar este popup, se redirige
al usuario a la ruta login para que inicie sesión.

El componente Register, a través de sus variables de estado y
manejadores de cambio en los inputs, se encarga de que los usuarios
puedan registrarse ingresando su correo y contraseña.
Una vez registrados los usuarios correctamente, pueden iniciar sesión
en el componente Login, que también a través de las variables de
estado y manejadores correspondientes permiten el correcto
inicio de sesión, de lo contrario se otorga un mensaje de error
en ambos componentes.

En caso de que el usuario tenga éxito o no al registrarse, el
componente InfoToolTips tiene un par de childrens que consisten
en ventanas modales que muestran un mensaje correspondiente.

Se ha creado un archivo en el directorio utils llamado auth.js, el
cual contiene las peticiones fetchs al backend para el registro,
el inicio de sesión que guarda en el almacenamiento local el token
proporcionado por el backend en la respuesta exitosa. También hay
un fetch que envía el Bearer token al backend para que lo revise
y de la autorización al usuario de ingresar a la página web sin
tener que iniciar sesión nuevamente. En caso de que el token sea
inválido se redirige al usuario a la vista de inicio de sesión.

Se aplicaron unas pequeñas reglas de seguridad con variables de
entorno. También con escape-html en la edición de perfil de usuario
para evitar el ataque de XSS. El estudio, comprensión e
implementación de estas reglas aún están en proceso, pronto
se podrán aplicar correctamente por todo el proyecto para brindar
una mayor seguridad.
