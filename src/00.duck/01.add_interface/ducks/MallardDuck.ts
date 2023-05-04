import { Duck } from "./Duck";
import { Flyable } from "../types/Flyable"
import { Quackable } from "../types/Quackable"

export class MallardDuck extends Duck implements Flyable, Quackable {
  public display(): void {
    console.log('マガモ（MallardDuck）を表示します。');
  }

  public fly(): void {
    console.log('飛びます。');
  }

  public quack(): void {
    console.log('ガーガー');
  }
}
