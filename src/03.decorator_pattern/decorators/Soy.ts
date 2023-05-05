import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "../beverages/Beverage";

export class Soy extends CondimentDecorator {
  constructor(protected beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + '、豆乳';
  }

  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
