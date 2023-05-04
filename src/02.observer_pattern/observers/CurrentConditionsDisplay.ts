import { WeatherData } from "../subjects/WeatherData";
import { Observer } from "../types/Observer";
import { DisplayElement } from "../types/DisplayElement";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temprature: number = 0;
  private humidity: number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(temprature: number, humidity: number): void {
    this.temprature = temprature;
    this.humidity = humidity;

    this.display();
  }

  public display(): void {
    console.log(`
    現在の気象状況: 
      気温: ${this.temprature} 度（華氏）
      湿度: ${this.humidity} %
      `)
  }
}