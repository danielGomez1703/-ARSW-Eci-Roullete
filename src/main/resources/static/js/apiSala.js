/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function createRoom() {
    var numSala = document.getElementById("numSala").value;
    let url = "/salas/addSala/" + numSala;
    const data = new FormData();
    console.log("entra a la funcion " + url);
    fetch(url, {
        method: 'POST'
    }).then(function (response) {
        if (response.ok) {
            console.log("crear la sala: " + numSala);

            return response.text();
        } else {
            console.log("no fue posible crear la sala");
            throw "Error en la llamada Ajax";
        }
    });
    sessionStorage.setItem("sala", numSala);

    window.location.href = "/gamecenter.html";
    return false;

}


function JoinRoom() {
    var numSala = document.getElementById("numSala").value;
    let url = "/salas/disp/" + numSala;
    const data = new FormData();
    console.log("entra a la funcion " + url);
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        if (response.ok) {
            console.log("unirse a la sala: " + numSala);
            return response.json();

        } else {
            console.log("no fue posible crear la sala");
            throw "Error en la llamada Ajax";
        }
    }).then(function (connect) {

        if ((connect)) {
            sessionStorage.setItem("sala", numSala);
            window.location.href = "/gamecenter.html";
        } else {
            window.alert("no pude unirse a esta sala");
        }
    });

    return false;

}