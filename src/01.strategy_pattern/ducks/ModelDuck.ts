import { Duck } from "../ducks/Duck";
import { FlyNoWay } from "../behaviors/fly_Behavior/FlyNoWay";
import { MuteQuack } from "../behaviors/quack_Behavior/MuteQuack";

export class ModelDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }
  
  public display(): void {
    console.log('模型のカモです！');
  }
}
