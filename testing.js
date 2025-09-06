// usar bucles for y while
// pedir al usuario un numero y mostrarlo
// pedir otro numero y sumar el resultado con el anterior
//mostrar el nuevo numero y preguntar si quiere sumar otro


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

