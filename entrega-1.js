// tipodes de conversores:
// temperatura, monedas, unidades de fisica (velocidades, pesos, energias, etc)
// usar swirch case en vez de if


const convertirACelsius = temp => (temp - 32) / 1.8;

const convertirAFahrenheit = temp => temp * 1.8 + 32;

console.log(convertirAFahrenheit(100))
