# NgrxPractica

Realizando uso de NgRx

Primero realizamos las respectivas instalaciones de los paquetes de store, effects, devtools y del router-store para luego centrarnos en la estructura donde generamos un routing module como tambien un modulo y asi generar un LazyLoading.
Tomando los datos del swagger que me van a servir para crud, cree las interface para los datos.
El estado global de la aplicacion los hicimos mediante la interface de appState importando el ClientesRes.

---

Store
Creamos el servicio realizando las peticiones http de la api, declaramos la ruta en el enviroment
