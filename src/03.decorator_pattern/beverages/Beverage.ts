export abstract class Beverage {
  public description = '不明な飲み物';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
