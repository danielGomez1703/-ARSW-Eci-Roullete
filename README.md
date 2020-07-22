# Roulettte-it

Este juego consiste en el juego clasico de los casinos de la ruleta, este juego consiste en apostar a un numero o a un pequeño bloque,  el jugador tambien podra apostar a bloques o sectores.
	-los bloques consisten  en el color (negro o rojo) o filas o columnas.
	- los secotern conisten en rangos de los numero dentro de la ruleta (1-18)


![Tablero](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/tablero.JPG)


esta imagen describe como es la base del juego.



# Antecedentes

este juego es muy popular en las casas de apuestas virtuales y  presenciales, este juego suele entretener en su gran mayoria por su simplicidad, a pesar de su simplicidad el juego es entretenido, mas si ahora podra jugar con amigos.

# Lo nuevo.

la idea es poder enlazar con amgios para apostar dentro de una misma sala, y esto con el fin de interactuar en una misma mesa, poder comunicarse y ayudarse, puede haber un modo equipo o un modo enfrentamiento, donde al dar al mismo numero deberan ir un minijuego conocido como piedra papel o tijera. para competir de forma interactiva por  el valor del premio.


# Jugando

para comenzar debe registrarse con su nombre o el alias que desee :

![Inicio](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/Inicio.png)

posteriormente debe darle en registrar y elejir como desea jugar.

![Registro](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/registro.PNG)

Una vez registrado y con sesion iniciada ya podra escoger que desea hacer.

![Salas](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/elecSalas.png)

ahora el jugador se encontrara en la sala de apuestas, listo para comenzar el juego. alli podra comunicarse con sus amigos para comenzar el juego.

![juego1](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/esquema.PNG)


una vez iniciado el juego los jugadores deberan apostar en sus tableros. es necesario que tengan un capital inicial para poder jugar. se identificaran las fichas de cada jugador con su respectivo color.

![juego2](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/apuesta.PNG)

en caso de ganar el jugadr sera informado de forma publica.

![juego3](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/finJuego.PNG)

los jugadores tendran esapcios habilitados para comunicarse mediante texto;
![juego3](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/chat.PNG)

## Modelo

![Modelo](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/Model.PNG)



la clase **usuario** es la representacion logica del cliente con sus credenciales con las cuales podra administrar o unirse a una sala y su saldo para poder apostar

la clase **sala**  es la representacion logica de la sala donde se reuniran los usuarios  ahacer sus apuestas y a conversar

la clase **Validator** es la clase que admiistrara los valores en el back de la ruleta, la cual se comunicara con esta clase para arrojar sus valores pod jugada y verificar las apuestas echas en la mesa


## Esquema

![uc](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/uc.PNG)

## Componentes

![componentes](https://github.com/danielGomez1703/-ARSW-Eci-Roullete/blob/master/resources/componentes.PNG)


## Casos de Uso

[link a sprint Backlog](https://tree.taiga.io/project/danielgomez1703-roulette-arsw/backlog) 

## Author
    Daniel Felipe Gomez Suarez
    
## BUILT IN
   Proyecto construido en [Maven](https://maven.apache.org/)
## License
----
para consultar su licencia vaya al link 
[leer aqui](https://github.com/danielGomez1703/ARSW-Primer/blob/master/LICENSE.txt)

