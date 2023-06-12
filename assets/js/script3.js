function opera1(){
    elemento_seleccion1= document.querySelector("#select1")
    elemento_final= document.querySelector("#Dato1")
    elemento_final.innerHTML= elemento_seleccion1.value
}

function opera2(){
    elemento_seleccion2= document.querySelector("#select2")
    elemento_final= document.querySelector("#Dato2")
    elemento_final.innerHTML= elemento_seleccion2.value
}

function opera3(){
    elemento_seleccion3= document.querySelector("#select3")
    elemento_final= document.querySelector("#Dato3")
    elemento_final.innerHTML= elemento_seleccion3.value
}


function validar_password(){


    if (Number(elemento_seleccion1.value) == 9 && Number(elemento_seleccion2.value) == 1)  {
        var e = 1
        if (Number(elemento_seleccion3.value) == 1 && e == 1 ){
        respuesta= document.querySelector("#Dato4")
        respuesta.innerHTML = "Password 1 es Correcto"
    }
}
    else if (Number(elemento_seleccion1.value) == 7 && Number(elemento_seleccion2.value) == 1)  {    
        var f= 1
        if (f== 1 && Number(elemento_seleccion3.value) == 4){
        respuesta2= document.querySelector("#Dato4")
        respuesta2.innerHTML = "Password 2 es Correcto"
    }

}
    else{
        respuesta2= document.querySelector("#Dato4")
        respuesta2.innerHTML = "Password es Incorrecto"
        respuesta3=document.querySelector("imagen_respu")
        respuesta3.style.display="block";
        respuesta4=document.querySelector("imagen_respu2")
        respuesta4.style.display="none";

}
}




