//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

//Formula to pass from F to C: (tempInFahrenheit - 32) * 5 / 9
//Formula to pass from C to F: (tempInCelsius * 9 / 5) + 32

// 32°F, 25°C, 70°F, 18°C, 80°F, 15°C, 72°F, 28°C, 68°F, 20°C, 75°F, 23°C, 
// 82°F, 30°C, 65°F, 22°C, 77°F, 26°C, 78°F, 24°C, 73°F, 21°C, 79°F, 27°C, 
// 71°F, 19°C, 74°F, 17°C, 76°F, 29°C

// Temperature
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

// Conversions
const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));

// Combine all temperatures in Fahrenheit
const allTempsInFahrenheit = fahrenheitTemps.concat(celsiusTempsToFahrenheit);

// Calculate the total temperatures
const tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);

// Convert total temperature to Celsius
const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32) * 5 / 9;

// Calculate average temperature in Fahrenheit and Celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allTempsInFahrenheit.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / allTempsInFahrenheit.length;

// Log 
console.log('Total Temperature in Fahrenheit:', tot_temperature_in_fahrenheit);
console.log('Average Temperature in Fahrenheit:', avg_temperature_in_fahrenheit);
console.log('Total Temperature in Celsius:', tot_temperature_in_celsius);
console.log('Average Temperature in Celsius:', avg_temperature_in_celsius);

// variables 
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
