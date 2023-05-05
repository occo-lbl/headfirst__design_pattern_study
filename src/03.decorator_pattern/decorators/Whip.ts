import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "../beverages/Beverage";

export class Whip extends CondimentDecorator {
  constructor(public beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + '、ホイップ';
  }

  public cost(): number {
    return this.beverage.cost() + 0.10;
  }
}
