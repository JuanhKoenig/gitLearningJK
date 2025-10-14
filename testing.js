const convertirACelsius = temp => (temp - 32) / 1.8;

const convertirAFahrenheit = temp => temp * 1.8 + 32;

const dolaresAPesos = dolares => dolares * 1466;

const pesosADolares = pesos => pesos / 1466;

const lbsAKG = lbs => lbs / 2.20462

const kgALbs = kg => kg * 2.20462

let convertionLog = []

const conversionMoneda = function() {
    const userMoneyType = parseInt(prompt("eliga una opcion:\n1.pesos a dolares \n2.dolares a pesos"))

    if (userMoneyType == 1) {
        const userPesos = parseInt(prompt("escriba el monto en pesos:"))
        alert(pesosADolares(userPesos))
        convertionLog.push(userPesos)

    }   else if (userMoneyType == 2) {
            const userDolares = parseInt(prompt("escriba el monto en dolares:"))
            convertionLog.push(userDolares)
            alert(dolaresAPesos(userDolares))

    }   else {
            alert("opcion invalida") //redondear los numeros para reducir decimales
    }
}

const conversionWeight = function(){
    const userWeightType = parseInt(prompt("que conversion desea hacer? \n1. Kgs a lbs\n2. lbs a Kgs"))
        
    if (userWeightType == 1) {
        const userWeight = parseFloat(prompt("ingrese el peso en Kgs"))
        convertionLog.push(userWeight)
        alert(kgALbs(userWeight))

        }   else if (userWeightType == 2) {
            const userWeight = parseFloat(prompt("ingrese el peso en lbs"))
            convertionLog.push(userWeight)
            alert(lbsAKG(userWeight))

        }   else {
            alert("opcion invalida")
    }
}

const conversionTemp = function() {
    const userTempType = parseInt(prompt("que conversion desea hacer? \n1. °C a °F\n.2 °F a °C"))

        if (userTempType == 1) {
            const userTemp = parseFloat(prompt("ingrese la temperatura en celcius"))
            convertionLog.push(userTemp)
            alert(convertirAFahrenheit(userTemp))

        }   else if (userTempType == 2) {
                const userTemp = parseFloat(prompt("ingrese la temperatura en fahrenheit"))
                convertionLog.push(userTemp)
                alert(convertirACelsius(userTemp))

        }   else {
                alert("opcion invalida")
    }
}

    const terminarCiclo = function(){
        finalAnswer = prompt("desea realizar otra operacion? y/n")
            if (finalAnswer == "n") {
                return repetirBucle = false
            }
    }

const menu = function() {
    
    let repetirBucle = true
    

    while (repetirBucle) {
    const usersChoice = parseInt(prompt("que desea hacer \n1.convertir monedas \n2.convertir pesos \n3.convertir temperaturas\n4. ver historial"))

    switch (usersChoice) {
        case 1:
        conversionMoneda()
        terminarCiclo()
        break;

        case 2:
        conversionWeight()
        terminarCiclo()
        break;

        case 3:
            conversionTemp()
            terminarCiclo()
            break;
        case 4:
            let history = []
            for (i = 0; i < convertionLog.length; i++) {
                history.push( "\n" + convertionLog[i])
            }
        alert("las conversiones fueron:\n " + history)
        terminarCiclo()
        break;

        default:
            alert("opcion invalida")
            terminarCiclo()


    }
    }
}

menu()


// class Pokemon {
//     constructor(pkname, firstType, secondType="ninguno") {
//         this.pkname = pkname,
//         this.firstType = firstType,
//         this.secondType = secondType
//     }
// }

// const gengar = new Pokemon("Gengar", "Fantasma", "Veneno")
// const squirtle = new Pokemon("Squirtle", "Agua")

// console.log(gengar, squirtle)

// class Conversor {
//         static conversorTarea(celsius) {
//             return ((celsius * 9/5 ) + 32);
//         }

// }


// class Conversor {
//     static celsiusAFahrenheit(celsius) {
//         return (celsius * 9/5) + 32;
//     }


// console.log(Conversor.conversorTarea(100))