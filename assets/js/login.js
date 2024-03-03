let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))//=> busco el usuario guardado en el navegador

const tituloBienvenida = document.getElementById("tituloBienvenida")
const logoutButton = document.getElementById("logout")


tituloBienvenida.innerHTML += usuarioLogueado.nombre

logoutButton.addEventListener("click", function(){
    localStorage.removeItem("usuarioLogueado")// elimino el usuario de la memoria del navegador
    window.location= "./index.html"// ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML
})





