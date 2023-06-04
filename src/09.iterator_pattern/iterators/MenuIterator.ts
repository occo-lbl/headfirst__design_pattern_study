import { MenuItem } from '../MenuItem';
import { Iterator } from '../types/Iterator';

export class MenuIterator implements Iterator {
  private menuItems: MenuItem[];
  private currentIndex: number = 0;

  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
  }

  public hasNext(): boolean {
    const isOver = this.currentIndex >= this.menuItems.length;
    const isNextItemNull = this.menuItems[this.currentIndex] === null;
    if (isOver || isNextItemNull) return false;

    return true;
  }

  public next(): MenuItem {
    const menuItem: MenuItem = this.menuItems[this.currentIndex];
    this.currentIndex++;

    return menuItem;
  }
}
