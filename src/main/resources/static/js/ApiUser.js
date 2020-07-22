/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


apiUser = (function () {

    return{

        signup: function (usuario) {
            jQuery.ajax({
                url: "/loginForm/",
                type: "POST",
                data: JSON.stringify(usuario),
                contentType: "application/json",
                success: function () {
                    alert("El usuario ha sido creado correctamente.");

                    location.href = "/register.html"
                }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("El Usuario ya esta registrado, intente nuevamente");
                }
            });

        }
    }
})();