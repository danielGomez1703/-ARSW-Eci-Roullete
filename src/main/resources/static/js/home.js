/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function LogUser(){
    const correo = document.getElementById("Correo").value;
    const passw = document.getElementById("inPassword").value;
    const apodo = document.getElementById("Nombre").value;
        const data = new FormData();
        data.append('correo', correo);
        data.append('apodo', apodo);
        data.append('password', passw);
        console.log("entra a la funcion");
       fetch('/addUser', {
            method: 'POST',
            body: data
        }).then(function (response) {
                    if (response.ok) {
                        //console.log("paso" + status + "algo");
                        return response.text()
                    } else {
                        console.log("no adiciona");
                        throw "Error en la llamada Ajax";
                    }
                });
        }

 
