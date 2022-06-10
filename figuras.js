// Tomando los elementos del html
const campoResultadoCuadrado = document.getElementById("resultCuadrado")
const campoResultadoTriangulo_1 = document.getElementById("resultTriangulo_1")
const campoResultadoTriangulo_2 = document.getElementById("resultTriangulo_2")
const campoResultadoCirculo = document.getElementById("resultCirculo_1")
const campoResultadoPrisma_1 = document.getElementById("resultPrisma_1")
const campoResultadoPrisma_2 = document.getElementById("resultPrisma_2")

var resultCuadrado = ""
var resultTrianguloArea = ""
var resultTrianguloPerimetro = ""
var resultCirculo = ""
var resultPrismaArea = ""
var resultPrismaVolumen = ""


//  CUADRADO
function perimetroCuadrado(lado) {
    return lado * 4
} 

function areaCuadrado1 (lado) {
    return lado * lado
} 

//  TRIANGULO
function areaTriangulox (base, altura){
    return (base * altura) / 2 
}

function perimetroTriangulox (lado1, base){
    return (Number(lado1) * 2 ) + Number(base)
}

//  CIRCULO
const PI = Math.PI

function diametroCirculox (radio) {
    return Number(radio) + Number(radio)
}

function circunferenciaCirculox(radio){
    const diametro = diametroCirculox(radio)   
    return ((diametro) * PI).toFixed(2) 
}

function areaCirculox (radio){
    return ((radio * radio) * PI).toFixed(2)
}

//  PRISMA RECTANGULAR
function areaPrismaRectangular (altura, base, profundidad) {
    return (2 * (profundidad + base) * altura) + 2 * (base * profundidad)
}


function volumenPrismaRectangular (altura, base, profundidad) {
    return (altura * base * profundidad)
}



// html html html  --  CUADRADO  -  CUADRADO  -  CUADRADO  -  CUADRADO  -  CUADRADO  -  CUADRADO

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputladoCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    resultCuadrado = "El perimetro del cuadrado es: " + perimetro
    campoResultadoCuadrado.innerHTML = resultCuadrado
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputladoCuadrado")
    const value = input.value

    const areaCuadrado = areaCuadrado1(value)
    resultCuadrado = "El área del cuadrado es: " + areaCuadrado
    campoResultadoCuadrado.innerHTML = resultCuadrado
}

// html html html  --  TRIANGULO  -  TRIANGULO  -  TRIANGULO  -  TRIANGULO  -  TRIANGULO
function calcularAreaTriangulo() {
    const inputBase_1 = document.getElementById("InputBaseTriangulo_1")
    const inputAltura = document.getElementById("InputAlturaTriangulo")
    const valueBase = inputBase_1.value
    const valueAltura = inputAltura.value

    const areaTriangulo = areaTriangulox(valueBase, valueAltura)
    resultTrianguloArea = "El área del triangulo es  " + areaTriangulo
    campoResultadoTriangulo_1.innerHTML = resultTrianguloArea
}

function calcularPerimetroTriangulo() {
    const inputLado = document.getElementById("InputLadoTriangulo")
    const inputBase_2 = document.getElementById("InputBaseTriangulo_2")
    const valueLado = inputLado.value
    const valueBase_2 = inputBase_2.value

    const perimetroTriangulo = perimetroTriangulox(valueLado, valueBase_2)
    resultTrianguloPerimetro = "El perimetro del triangulo es :" + perimetroTriangulo
    campoResultadoTriangulo_2.innerHTML = resultTrianguloPerimetro
}

// html html html  --  CIRCULO   -   CIRCULO   -   CIRCULO   -   CIRCULO   -   CIRCULO
function calcularDiametroCirculo() {
    const inputRadio_1 = document.querySelector("#InputRadio_1")
    const valueRadio_1 = inputRadio_1.value

    const diametroCirculo = diametroCirculox(valueRadio_1)
    resultCirculo = "El diámetro del circulo es :" + diametroCirculo
    campoResultadoCirculo.innerHTML = resultCirculo
}

function calcularCircunferencia() {
    inputRadio_1 = document.getElementById("InputRadio_1")
    valueRadio_1 = inputRadio_1.value
    const circunferencia = circunferenciaCirculox(valueRadio_1)

    resultCirculo = "La circunferencia es : " + circunferencia
    campoResultadoCirculo.innerHTML = resultCirculo
}

function calcularAreaCirculo() {
    inputRadio_1 = document.querySelector("#InputRadio_1")
    valueRadio_1 = inputRadio_1.value
    const areaCirculo = areaCirculox(valueRadio_1)

    resultCirculo = "El área del circulo es : " + areaCirculo
    campoResultadoCirculo.innerHTML = resultCirculo
}

// html html html  --  PRISMA RECTANGULO  --  PRISMA RECTANGULO  --  PRISMA RECTANGULO  --
function calcularAreaPrisma () {
    var inputAltura = document.getElementById("inputAltura")
    var inputBase = document.getElementById("inputBase")
    var inputProfundidad = document.getElementById("inputProfundidad")
    var valueAltura = inputAltura.value
    var valueBase = inputBase.value
    var valueProfundidad = inputProfundidad.value

    const areaPrisma = areaPrismaRectangular(valueAltura, valueBase, valueProfundidad)

    resultPrismaArea = "El área del Prisma es: " + areaPrisma + " cm2"
    campoResultadoPrisma_1.innerHTML = resultPrismaArea
}

function calcularVolumenPrisma () {
    var inputAltura = document.getElementById("inputAltura")
    var inputBase = document.getElementById("inputBase")
    var inputProfundidad = document.getElementById("inputProfundidad")
    var valueAltura = inputAltura.value
    var valueBase = inputBase.value
    var valueProfundidad = inputProfundidad.value

    const volumenPrisma = volumenPrismaRectangular(valueAltura, valueBase, valueProfundidad)

    resultPrismaVolumen = "El volumen del prisma es: " + volumenPrisma + " ∧3"
    campoResultadoPrisma_1.innerHTML = resultPrismaVolumen
}