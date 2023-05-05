import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();

    this.description = 'ダークロースト';
  }

  public cost(): number {
    return 0.99;
  }
}
