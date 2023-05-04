import { CurrentConditionsDisplay } from "./observers/CurrentConditionsDisplay";
import { WeatherData } from "./subjects/WeatherData";

function run() {
  const weatherData: WeatherData = new WeatherData();
  const currentDisplay = new CurrentConditionsDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30);
}

run();