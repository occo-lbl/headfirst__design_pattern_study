import { FlyBehavior } from "../types/FlyBehavior";
import { QuackBehavior } from "../types/QuackBehavior";

export abstract class Duck {
  protected flyBehavior?: FlyBehavior;
  protected quackBehavior?: QuackBehavior;

  constructor() {}

  public swim(): void {
    console.log('すべてのカモは浮きます。囮のカモでも！');
  }
  
  public performFly(): void {
    this.flyBehavior?.fly();
  }
  
  public performQuack(): void {
    this.quackBehavior?.quack();
  }

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }

  public abstract display(): void;
}
