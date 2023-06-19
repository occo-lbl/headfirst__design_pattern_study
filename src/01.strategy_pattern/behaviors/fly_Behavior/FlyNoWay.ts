import { FlyBehavior } from "../../types/FlyBehavior";

export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log('飛べません！');
  }
}
