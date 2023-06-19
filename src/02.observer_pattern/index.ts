import { CurrentConditionsDisplay } from "./observers/CurrentConditionsDisplay";
import { StatisticsDisplay } from "./observers/StatisticsDisplay";
import { WeatherData } from "./subjects/WeatherData";

function run() {
  const weatherData: WeatherData = new WeatherData();
  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30);
  weatherData.setMeasurements(90, 64, 32);
  
  weatherData.removeObserver(statisticsDisplay);
  weatherData.setMeasurements(75, 20, 33);
}

run();