import { QuackBehavior } from "../../types/QuackBehavior";

export class Squesk implements QuackBehavior {
  public quack(): void {
    console.log('キューキュー');
  }
}
