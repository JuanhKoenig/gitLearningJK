// tipodes de conversores:
// temperatura, monedas, unidades de fisica (velocidades, pesos, energias, etc)
// usar swirch case en vez de if


const convertirACelsius = temp => (temp - 32) / 1.8;

const convertirAFahrenheit = temp => temp * 1.8 + 32;

const dolaresAPesos = dolares => dolares * 1466;

const pesosADolares = pesos => pesos / 1466;

const lbsAKG = lbs => lbs / 2.20462

const kgALbs = kg => kg * 2.20462



console.log(kgALbs(70))
