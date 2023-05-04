export interface Observer {
  update(
    temprature: number,
    humidity: number,
    presure: number
  ): void;
}
