import { Duck } from "./Duck";

export class RubberDuck extends Duck {
  public override quack(): void {
    console.log('キューキュー');
  }

  public override fly(): void { }

  public display(): void {
    console.log('ゴムのアヒル（RubberDuck）を表示します。');
  }
}
