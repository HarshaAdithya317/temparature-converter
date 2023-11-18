function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const inputUnit = document.getElementById("input-unit").value;
    const outputUnit = document.getElementById("output-unit").value;
    const temperatureValue = parseFloat(temperatureInput.value);
    if (!isNaN(temperatureValue)) {
        let convertedTemperature = temperatureValue;
        if (inputUnit === "celsius") {
            if (outputUnit === "fahrenheit") {
                convertedTemperature = (temperatureValue * 9/5) + 32;
            } else if (outputUnit === "kelvin") {
                convertedTemperature = temperatureValue + 273;
            }
        } else if (inputUnit === "fahrenheit") {
            if (outputUnit === "celsius") {
                convertedTemperature = (temperatureValue - 32) * 5/9;
            } else if (outputUnit === "kelvin") {
                convertedTemperature = (temperatureValue - 32) * 5/9 + 273;
            }
        } else if (inputUnit === "kelvin") {
            if (outputUnit === "celsius") {
                convertedTemperature = temperatureValue - 273;
            } else if (outputUnit === "fahrenheit") {
                convertedTemperature = (temperatureValue - 273) * 9/5 + 32;
            }
        }
        document.getElementById("result").textContent = `Result: ${convertedTemperature.toFixed(2)} ${outputUnit}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid temperature.";
    }
}
