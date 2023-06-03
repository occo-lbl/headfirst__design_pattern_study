import { CaffeineBeverage } from './CaffeineBeverage';

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log('紅茶を浸す');
  }
  protected addCondiments(): void {
    console.log('レモンを追加する');
  }
}
