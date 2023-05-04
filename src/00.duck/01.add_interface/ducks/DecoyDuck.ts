import { Duck } from "./Duck";

export class DecoyDuck extends Duck {
  public display(): void {
    console.log('囮のカモ（DecoyDuck）を表示します。');
  }
}
