import { Subject } from "../types/Subject";
import { Observer } from "../types/Observer";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temprature: number;
  private humidity: number;
  private presure: number;

  constructor() {
    this.observers = [];
    this.temprature = 0;
    this.humidity = 0;
    this.presure = 0;
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  public notifyObserver(): void {
    for (const observer of this.observers) {
      observer.update(this.temprature, this.humidity, this.presure);
    }
  }

  public measurementtsChanged(): void {
    this.notifyObserver();
  }

  public setMeasurements(
    temprature: number,
    humidity: number,
    presure: number
  ): void {
    this.temprature = temprature;
    this.humidity = humidity;
    this.presure = presure;

    this.measurementtsChanged();
  }
}
