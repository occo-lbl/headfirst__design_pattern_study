import { Beverage } from "../beverages/Beverage";

export abstract class CondimentDecorator extends Beverage {
  public beverage?: Beverage;

  public abstract getDescription(): string;
}
