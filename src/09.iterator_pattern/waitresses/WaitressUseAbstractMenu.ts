import { Iterator } from '../types/Iterator';
import { Menu } from '../types/Menu';

export class WaitressUseAbstractMenu {
  private menus: Menu[];

  constructor(menus: Menu[]) {
    this.menus = menus;
  }

  public printMenu(): void {
    console.log('========== メニュー ==========');

    for (const menu of this.menus) {
      const iterator: Iterator = menu.createIterator();
      this.printPickupMenu(iterator);
      console.log('\n');
    }
  }

  private printPickupMenu(iterator: Iterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(`${menuItem.getName()}: ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
    }
  }
}
