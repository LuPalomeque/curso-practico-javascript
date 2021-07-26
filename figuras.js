// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
    return radio * radio * PI;
}

console.groupEnd();


function calcularPerimetroCuadrado() {
    const value = Number.parseFloat(document.getElementById("InputCuadradoPerimetro").value);
    if (isNaN(value) || value < 0){
        alert("Ingrese un valor válido");
    } else {
        alert("El perímetro del cuadrado es de: " + perimetroCuadrado(value) + "cm.");
    }
    document.getElementById("InputCuadradoPerimetro").value = "";   
}

function calcularAreaCuadrado() {
    const value = Number.parseFloat(document.getElementById("InputCuadradoArea").value);
    if (isNaN(value) || value < 0){
        alert("Ingrese un valor válido");
    } else {
        alert("El área del cuadrado es de: " + areaCuadrado(value) + "cm2.");
    }
    document.getElementById("InputCuadradoArea").value = "";
}


function calcularPerimetroCirculo() {
    const value = Number.parseFloat(document.getElementById("InputCirculoPerimetro").value);
    if (isNaN(value) || value < 0){
        alert("Ingrese un valor válido");
    } else {
        alert("El perímetro del círculo es de: " + perimetroCirculo(value) + "cm.");
    }
    document.getElementById("InputCirculoPerimetro").value = "";
}

function calcularAreaCirculo() {
    const value = Number.parseFloat(document.getElementById("InputCirculoArea").value);
    if (isNaN(value) || value < 0){
        alert("Ingrese un valor válido");
    } else {
        alert("El área del círculo es de: " + areaCirculo(value) + "cm2.");
    }
    document.getElementById("InputCirculoArea").value = "";
}


function calcularPerimetroTriangulo() {
    const valueLado1 = Number.parseFloat(document.getElementById("InputTrianguloLado1").value);
    const valueLado2 = Number.parseFloat(document.getElementById("InputTrianguloLado2").value);
    const valueBase = Number.parseFloat(document.getElementById("InputTrianguloBaseP").value);
    if (isNaN(valueLado1) || isNaN(valueLado2) || isNaN(valueBase) || valueBase < 0 || valueLado1 < 0 || valueLado2 < 0){
        alert("Ingrese valores válidos");
    } else {
        alert("El perímetro del triángulo es de: " + perimetroTriangulo(valueLado1, valueLado2, valueBase) + "cm.");
    }
    document.getElementById("InputTrianguloLado1").value = "";
    document.getElementById("InputTrianguloLado2").value = "";
    document.getElementById("InputTrianguloBaseP").value = ""; 
}

function calcularAreaTriangulo() {
    const valueBase = Number.parseFloat(document.getElementById("InputTrianguloBaseA").value);
    const valueAltura = Number.parseFloat(document.getElementById("InputTrianguloAltura").value);
    if (isNaN(valueBase) || isNaN(valueAltura) || valueBase < 0 || valueAltura < 0){
        alert("Ingrese valores válidos");
    } else {
        alert("El área del triángulo es de: " + areaTriangulo(valueBase, valueAltura) + "cm2.");
    }
    document.getElementById("InputTrianguloBaseA").value = "";
    document.getElementById("InputTrianguloAltura").value = "";
}