import { Pizza } from "../Pizza";

export class NYStyleCheesePizza extends Pizza {

  constructor() {
    super();

    this.name = 'ニューヨークスタイルのソース＆チーズピザ';
    this.dough = '薄いクラスト生地';
    this.sauce = 'マリナラソース';

    this.toppings.push('すりおろしたレッジャーノチーズ');
  }
}
