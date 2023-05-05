import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();

    this.description = 'エスプレッソ';
  }

  public cost(): number {
    return 1.99;
  }
}
