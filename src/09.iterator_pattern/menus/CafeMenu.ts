import { MenuItem } from '../MenuItem';
import { Iterator } from '../types/Iterator';
import { Menu } from '../types/Menu';
import { MenuIterator } from '../iterators/MenuIterator';

export class CafeMenu implements Menu {
  private menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];

    this.addItem(
      '野菜バーガーとフライドポテト',
      '全粒小麦パンにレタスとトマトを挟んだ野菜バーガー',
      true,
      3.99
    );
    this.addItem('本日のスープ', 'サラダが付いた本日のスープ', false, 3.69);
    this.addItem('ブリトー', 'インゲン豆、サルサ、グアカモーレ入りの大きなブリトー', true, 4.29);
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
