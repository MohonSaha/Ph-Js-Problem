// Problem: Convert temperature

// Learn how to create a temperature converter. Your task is to provide a value in Fahrenheit and then convert it into Celsius . Then round it up to two decimal places if you get fraction. And return the rounded value as output. 

// Alert: The output must be in a number format. 

// The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:

// ℃=(℉-32)/1.8


function temperatureConverter(valNum) {
    const convert = (valNum - 32)/1.8;
    const celsius = parseFloat(convert.toFixed(2));
    return celsius;
}

const result = temperatureConverter(103)
console.log(result);
