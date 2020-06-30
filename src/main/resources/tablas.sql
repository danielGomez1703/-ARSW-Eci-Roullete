/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Author:  danip
 * Created: 28/06/2020
 */

CREATE TABLE USUARIOS(
CORREO VARCHAR(30) PRIMARY KEY NOT NULL,
NOMBRE_USUARIO VARCHAR(20) UNIQUE NOT NULL,
CLAVE VARCHAR(20) NOT NULL,
MONEDAS VARCHAR(10) NOT NULL,
);


