import { Duck } from "./Duck";
import { Quackable } from "../types/Quackable"

export class RubberDuck extends Duck implements Quackable {
  public quack(): void {
    console.log('キューキュー');
  }

  public display(): void {
    console.log('ゴムのアヒル（RubberDuck）を表示します。');
  }
}
