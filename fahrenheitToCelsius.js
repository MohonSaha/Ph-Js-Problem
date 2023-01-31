



// (32°F − 32) × 5/9 = 0°C

function temperatureConverter(valNum) {
    const convert = (valNum - 32)/1.8;
    const celsius = parseFloat(convert.toFixed(2));
    return celsius;
}

const result = temperatureConverter(103)
console.log(result);
