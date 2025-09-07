// usar bucles for y while
// pedir al usuario un numero y mostrarlo
// pedir otro numero y sumar el resultado con el anterior
//mostrar el nuevo numero y preguntar si quiere sumar otro



function sumarNumeros() {
let primerNumero = parseInt(prompt("elija un numero"));
alert(`el numero que usted eligio el es ${primerNumero}`)

let repeat = true;

while (repeat) {
    let manytimes = parseInt(prompt("cantas sumas quieres hacer?"))
    let suma = primerNumero;
    for (i = 1; i <= manytimes; i++) {
        alert(`la suma actual es de ${suma} progreso (${i}/${manytimes})`)
        primerNumero = parseInt(prompt("cuanto quiere sumar?"))
        suma = primerNumero + suma
    }

        repeat = false;

}

}

// let restar = function(numero, resta=1){
//     return numero - resta;
// }

// console.log(restar(5, 2));


let checkBirthDay = function() {
    let userYear = parseInt(prompt('en que año naciste?'))
    let age = 2025 - userYear;
    let checkBirthDay = prompt('ya paso tu cumpleaños?(y/n)')
    if (checkBirthDay == 'y') {
        return alert(`tu edad es ${age}`)
    } else {
        return alert(`tu edad es ${age - 1}`)
    }
}

// checkBirthDay()

let testing = function(numeroraro){
    return numeroraro
}

console.log(testing())