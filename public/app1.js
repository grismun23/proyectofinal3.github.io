const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+(\.-]?\w+)@\w+(\.-]?\w+)(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }


    if(mensaje.value.length <10){
        warnings += `Mensaje demasiado corto<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})