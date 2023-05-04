import { FlyBehavior } from "../../types/FlyBehavior";

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log('飛びます');
  }
}
