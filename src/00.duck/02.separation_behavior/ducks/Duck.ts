import { FlyBehavior } from "../types/FlyBehavior";
import { QuackBehavior } from "../types/QuackBehavior";

export abstract class Duck {
  protected flyBehavior?: FlyBehavior;
  protected quackBehavior?: QuackBehavior;

  public swim(): void {
    console.log('すべてのカモは浮きます。囮のカモでも！');
  }
  
  public performFly(): void {
    this.flyBehavior?.fly();
  }
  
  public performQuack(): void {
    this.quackBehavior?.quack();
  }

  public abstract display(): void;
}
