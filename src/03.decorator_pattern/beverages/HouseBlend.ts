import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super();

    this.description = 'ハウスブレンド';
  }

  public cost(): number {
    return 0.89;
  }
}
