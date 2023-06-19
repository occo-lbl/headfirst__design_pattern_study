import { Pizza } from "../Pizza";

export class ChicagoStyleCheesePizza extends Pizza {

  constructor() {
    super();

    this.name = 'シカゴスタイルのディープティッシュチーズピザ';
    this.dough = '極厚クラスト生地';
    this.sauce = 'プラムトマトソース';

    this.toppings.push('シュレッドモツァレラチーズ');
  }

  public override cut(): void {
    console.log('ピザを四角形にカットする');
  }
}
