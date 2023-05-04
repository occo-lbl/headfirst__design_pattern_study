import { Duck } from "./Duck";

export class DecoyDuck extends Duck {
  public override quack(): void {}

  public override fly(): void { }

  public display(): void {
    console.log('囮のカモ（DecoyDuck）を表示します。');
  }
}
