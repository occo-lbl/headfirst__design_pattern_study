import { Duck } from "./Duck";

export class RedheadDuck extends Duck {
  public display(): void {
    console.log('アメリカホシハジロ（RedheadDuck）を表示します。');
  }
}
