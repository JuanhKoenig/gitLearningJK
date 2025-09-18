// tipodes de conversores:
// temperatura, monedas, unidades de fisica (velocidades, pesos, energias, etc)
// usar swirch case en vez de if
// pullir los mensajes de alert para que hayan menos decimales

// -variables, const, arrays -listo
// -script en el head con defer
// -Minimo 3 funciones CON parametros
// -Minimo un if
// -Minimo un ciclo (for/while)
// -TODO con prompt, console, alert
// -NADA que exceda a la clase 4
// -Se entrega SI O SI mediante github


const convertirACelsius = temp => (temp - 32) / 1.8;

const convertirAFahrenheit = temp => temp * 1.8 + 32;

const dolaresAPesos = dolares => dolares * 1466;

const pesosADolares = pesos => pesos / 1466;

const lbsAKG = lbs => lbs / 2.20462

const kgALbs = kg => kg * 2.20462



console.log(kgALbs(70))


const menu = function() {
    const usersChoice = parseInt
    
    
    
    
    (prompt("sample text"))
    switch (usersChoice) {
        case 1:
        const dolares = parseInt(prompt("cuantos dolares"))
        alert(dolaresAPesos(dolares))
        break;

        case 2:
        const pesos = parseInt(prompt("cuantos pesos"))
        alert(pesosADolares(pesos))
        break;
        default:
            alert("testing")
    }
}

menu()