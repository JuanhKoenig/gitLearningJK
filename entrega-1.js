// tipodes de conversores que puedo agregar:
// temperatura, monedas, unidades de fisica (velocidades, pesos, energias, etc)
// pullir los mensajes de alert para que hayan menos decimales

const convertirACelsius = temp => (temp - 32) / 1.8;

const convertirAFahrenheit = temp => temp * 1.8 + 32;

const dolaresAPesos = dolares => dolares * 1466;

const pesosADolares = pesos => pesos / 1466;

const lbsAKG = lbs => lbs / 2.20462

const kgALbs = kg => kg * 2.20462


const menu = function() {
    
    let repeteirBucle = true
    let convertionLog = []

    const terminarCiclo = function(){
        finalAnswer = prompt("desea realizar otra operacion? y/n")
            if (finalAnswer == "n") {
                return repeteirBucle = false
            }
    }

    while (repeteirBucle) {
    const usersChoice = parseInt(prompt("que desea hacer \n1.convertir monedas \n2.convertir pesos \n3.convertir temperaturas\n4. ver historial"))

    switch (usersChoice) {
        case 1:
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
        terminarCiclo()
        break;

        case 2:
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
        terminarCiclo()
        break;

        case 3:
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
