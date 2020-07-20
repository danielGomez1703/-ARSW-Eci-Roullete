/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

async function LogUser() {
    const correo = document.getElementById("Correo").value;
    const passw = document.getElementById("inPassword").value;
    const apodo = document.getElementById("Nombre").value;
    const data = new FormData();
    data.append('correo', correo);
    data.append('apodo', apodo);
    data.append('password', passw);
    let url = "/addUsers";
    console.log("entra a la funcion");
    fetch(url, {
        method: 'POST',
        body: data
    }).then(function (response) {
        console.log(response);
        if (response.ok) {
            //console.log("paso" + status + "algo");
            alert("se regitro existosamente");
            window.location.href = "/options.html";
            return false;
        } else {
            console.log(response);
            console.log("no adiciona");
            throw "Error en la llamada Ajax";
        }
    });
}


function irRegistrar() {
    window.location.href = "/register.html";
    return false;
}

function LogIn() {
    const correo = document.getElementById("Correo").value;
    const passw = document.getElementById("Password").value;
    const data = new FormData();
    data.append('correo', correo);
    data.append('password', passw);
    let url = "/logUser";
    console.log("entra a la funcion");
    fetch(url, {
        method: 'POST',
        body: data
    }).then(function (response) {
        console.log(response);
        if (response.ok) {
            //window.location.href = "/options.html";
            return response.json();
        } else {
            alert("Ha ocurrido un error en el servidor");
            throw "Error en la llamada Ajax";
        }
    }).then(function (connect) {
        console.log(connect);
        if ((connect.isLog)) {
            alert("Inicio de sesion Exitoso");
            sessionStorage.setItem("usuario", correo);
            window.location.href = "/options.html";
        } else {
            window.alert("verifique su correo/clave");
        }
    });;
}