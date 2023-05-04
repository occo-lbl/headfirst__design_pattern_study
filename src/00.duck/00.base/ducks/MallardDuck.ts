import { Duck } from "./Duck";

export class MallardDuck extends Duck {
  public display(): void {
    console.log('マガモ（MallardDuck）を表示します。');
  }
}
