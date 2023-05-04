import { QuackBehavior } from "../../types/QuackBehavior";

export class MuteQuack implements QuackBehavior {
  public quack(): void {
    console.log('・・・');
  }
}
