import { Duck } from "./Duck";
import { FlyNoWay } from "../behaviors/fly_Behavior/FlyNoWay"
import { Squesk } from "../behaviors/quack_Behavior/Squesk"

export class RubberDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squesk();
  }

  public display(): void {
    console.log('ゴムのアヒル（RubberDuck）を表示します。');
  }
}
