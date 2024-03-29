# NgrxPractica

Realizando uso de NgRx.

Primero realizamos las respectivas instalaciones de los paquetes de store, effects, devtools y del router-store para luego centrarnos en la estructura donde generamos un routing module como tambien un modulo y asi generar un LazyLoading.
Tomando los datos del swagger que me van a servir para crud, cree las interface para los datos.
El estado global de la aplicacion los hicimos mediante la interface de appState importando el ClientesRes.

Store:
Ya adentrandonos en ngrx, creamos para el store las carpetas para los actions, effects, reducers, selectors asi lograr mejor estructura, como el metaEffects y el metaReducers.
El actions, va a estar llamando al effects, creamos el effects de tipo injectable, dentro del constructor llamamos al actions para hacer uso de el, los parametros que declaramos en actions, de que forma se vincula el action con el effects, especificando el ofType, tambien hacemos uso de RxJS en la funcion, en effects vamos a conseguir los datos del Actions.

Viendo el tipico mapa de NgRx de la Action fuimos al Effects para acceder al Service y asi retornar al Action con valores de la base de datos...

Del Success en el actions que conseguimos eso ahora se lo pasamos al Reducer, en el store del Reduce creamos la funcion para createReducer que viene de ngrx/store como los demas que tambien tienen el suyo, aplicamos el on usando el success del action. Y para tomar esto y que funcione los declaramos dentro del metaEffects llamamos al ClientsEffects para asi ya declarar metaEffects dentro del modulo principal en el root del effects, como tambien con el Reducer pero este lo agregamos en el rootforstore.

Ahora en el clientList components, sacamos el servicio y declaramos el store<appState> asi dejar de llamar servicios en los components aplicando el dispath getClients, sirve como buena practica .
