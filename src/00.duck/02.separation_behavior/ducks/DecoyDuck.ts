import { Duck } from "./Duck";
import { FlyWithWings } from "../behaviors/fly_Behavior/FlyWithWings";
import { Quack } from "../behaviors/quack_Behavior/Quack";

export class DecoyDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('囮のカモ（DecoyDuck）を表示します。');
  }
}
