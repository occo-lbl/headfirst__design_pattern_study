import { MenuItem } from '../MenuItem';
import { Iterator } from '../types/Iterator';
import { Menu } from '../types/Menu';
import { MenuIterator } from '../iterators/MenuIterator';

export class PancakeHouseMenu implements Menu {
  private menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];

    this.addItem('K&Bのパンケーキ朝食', 'スクランブルエッグとトースト付きパンケーキ', true, 2.99);
    this.addItem('いつものパンケーキ朝食', '卵焼きとソーセージ付きパンケーキ', false, 2.99);
    this.addItem('ブルーベリーパンケーキ', '新鮮なブルーベリーを使ったパンケーキ', true, 3.49);
    this.addItem('ワッフル', 'ブルーベリーかイチゴの好きな方を乗せたワッフル', true, 3.59);
  }

  public addItem(name: string, description: string, vegetarian: boolean, price: number): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  public createIterator(): Iterator {
    return new MenuIterator(this.menuItems);
  }

  // ほかのメニューメソッド...
}
