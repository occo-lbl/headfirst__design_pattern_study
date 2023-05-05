import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "../beverages/Beverage";

export class Mocha extends CondimentDecorator {
  constructor(protected beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + '、モカ';
  }

  public cost(): number {
    return this.beverage.cost() + 0.20;
  }
}
