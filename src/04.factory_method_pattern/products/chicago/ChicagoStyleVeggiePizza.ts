import { Pizza } from "../Pizza";

export class ChicagoStyleVeggiePizza extends Pizza {

  constructor() {
    super();

    this.name = 'シカゴスタイルの野菜ソース＆ディープティッシュチーズ';
    this.dough = '極厚クラスト生地';
    this.sauce = 'プラムトマトソース';

    this.toppings.push('シュレッドモツァレラチーズ');
  }

  public override cut(): void {
    console.log('ピザを四角形にカットする');
  }
}
