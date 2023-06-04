import { MenuItem } from '../MenuItem';
import { Iterator } from '../types/Iterator';
import { Menu } from '../types/Menu';
import { MenuIterator } from '../iterators/MenuIterator';

export class DinerMenu implements Menu {
  private menuItems: MenuItem[];
  static readonly MAX_ITEMS_COUNT = 6;
  private itemIndex = 0;

  constructor() {
    this.menuItems = [];

    this.addItem(
      'ベジタリアンBLT',
      'レタス。トマト、（フェイク）ベーコンを挟んだ全粒小麦パンサンドイッチ',
      true,
      2.99
    );
    this.addItem('BLT', 'レタス。トマト、ベーコンを挟んだ全粒小麦パンサンドイッチ', false, 2.99);
    this.addItem('本日のスープ', 'ポテトサラダを添えた本日のスープ', false, 3.29);
    this.addItem(
      'ホットドック',
      'サワークラウト、レリッシュ、玉ねぎ、チーズを挟んだホットドッグ',
      false,
      3.05
    );
  }

  public createIterator(): Iterator {
    return new MenuIterator(this.menuItems);
  }

  public addItem(name: string, description: string, vegetarian: boolean, price: number): void {
    if (this.itemIndex >= DinerMenu.MAX_ITEMS_COUNT) {
      console.log('すみません、メニューはいっぱいです！メニューに項目を追加できません');
      return;
    }

    this.menuItems[this.itemIndex] = new MenuItem(name, description, vegetarian, price);
    this.itemIndex++;
  }

  // ほかのメニューメソッド...
}
