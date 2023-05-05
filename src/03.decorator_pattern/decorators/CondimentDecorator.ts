import { Beverage } from "../beverages/Beverage";

export abstract class CondimentDecorator extends Beverage {
  protected beverage?: Beverage;

  public abstract getDescription(): string;
}
