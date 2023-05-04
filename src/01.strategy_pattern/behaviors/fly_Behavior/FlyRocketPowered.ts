import { FlyBehavior } from "../../types/FlyBehavior";

export class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log('ロケットで飛んでいます！');
  }
}
