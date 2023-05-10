import { Pizza } from "../Pizza";

export class NYStyleVeggiePizza extends Pizza {

  constructor() {
    super();

    this.name = 'ニューヨークスタイルの野菜ソース＆チーズピザ';
    this.dough = '薄いクラスト生地';
    this.sauce = '野菜ソース';

    this.toppings.push('すりおろしたレッジャーノチーズ');
  }
}
