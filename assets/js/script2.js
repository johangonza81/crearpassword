
function resultado(){
var input1 = document.querySelector("#input-1")
monto1=input1.value
var input2 = document.querySelector("#input-2")
monto2=input2.value
var input3 = document.querySelector("#input-3")
monto3=input3.value
result= Number(monto1) + Number(monto2) + Number(monto3)
if(result < 0){
element = document.querySelector("#Dato1")
element.innerHTML = "solo debe ingresar numeros positivos"
element2=document.querySelector("#Dato1")
element2.style.color="red"
}else if(monto1 < 0){
element = document.querySelector("#Dato1")
element.innerHTML = "solo debe ingresar numeros positivos"
element2=document.querySelector("#Dato1")
element2.style.color="red"
}else if (monto2 < 0){
element = document.querySelector("#Dato1")
element.innerHTML = "solo debe ingresar numeros positivos"
element2=document.querySelector("#Dato1")
element2.style.color="red"
}else if (monto3 < 0){
element = document.querySelector("#Dato1")
element.innerHTML = "solo debe ingresar numeros positivos"
element2=document.querySelector("#Dato1")
element2.style.color="red"
}else if(result > 10){
element = document.querySelector("#Dato1")
element.innerHTML = "Ha excedido la cantidad intentelo de nuevo"
element2=document.querySelector("#Dato1")
element2.style.color="red"
}else{
element = document.querySelector("#Dato1")
element.innerHTML = "la cantidad de sticker seleccionados son:" + " " + result
element2=document.querySelector("#Dato1")
element2.style.color="blue"
}
}
