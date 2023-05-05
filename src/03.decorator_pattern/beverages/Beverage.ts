export abstract class Beverage {
  protected description = '不明な飲み物';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
