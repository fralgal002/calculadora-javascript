// Agrega a la pantalla la pulsación del usuario
function dibujarPantalla(valor){
    document.getElementById('pantalla').value += valor
}

//Limpiar calculadora
function borrarContenido(){
    document.getElementById('pantalla').value = ''
}

//Calculo de la pantalla
function calcularPantalla(){
    const expresion = document.getElementById('pantalla').value
    const resultado = eval(expresion)
    document.getElementById('pantalla').value = resultado
}