import { Duck } from "../ducks/Duck";
import { FlyWithWings } from "../behaviors/fly_Behavior/FlyWithWings"
import { Quack } from "../behaviors/quack_Behavior/Quack"

export class RedheadDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('アメリカホシハジロ（RedheadDuck）を表示します。');
  }
}
