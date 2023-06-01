import { Duck } from './types/Duck';

export class MallardDuck implements Duck {
  public quack(): void {
    console.log('ガーガー');
  }
  public fly(): void {
    console.log('飛んでいます');
  }
}
