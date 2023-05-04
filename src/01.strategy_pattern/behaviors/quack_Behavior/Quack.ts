import { QuackBehavior } from "../../types/QuackBehavior";

export class Quack implements QuackBehavior {
  public quack(): void {
    console.log('ガーガー');
  }
}
