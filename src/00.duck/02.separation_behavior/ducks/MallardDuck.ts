import { Duck } from "./Duck";
import { FlyWithWings } from "../behaviors/fly_Behavior/FlyWithWings";
import { Quack } from "../behaviors/quack_Behavior/Quack";

export class MallardDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }
  
  public display(): void {
    console.log('マガモ（MallardDuck）を表示します。');
  }
}
