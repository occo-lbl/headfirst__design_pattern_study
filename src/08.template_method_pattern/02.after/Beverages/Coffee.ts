import { CaffeineBeverage } from './CaffeineBeverage';

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log('フィルターでコーヒーをドリップする');
  }
  protected addCondiments(): void {
    console.log('砂糖とミルクを追加する');
  }
}
