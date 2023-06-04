import { Iterator } from '../types/Iterator';
import { Menu } from '../types/Menu';

export class Waitress {
  private pancakeHouseMenu: Menu;
  private dinerMenu: Menu;
  private cafeMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
    this.cafeMenu = cafeMenu;
  }

  public printMenu(): void {
    const pancakeHouseMenuIterator: Iterator = this.pancakeHouseMenu.createIterator();
    const DinerMenuIterator: Iterator = this.dinerMenu.createIterator();
    const cafeMenuIterator: Iterator = this.cafeMenu.createIterator();

    console.log('========== メニュー ==========');
    console.log('----- 朝食 -----');
    this.printPickupMenu(pancakeHouseMenuIterator);

    console.log('\n----- 昼食 -----');
    this.printPickupMenu(DinerMenuIterator);

    console.log('\n----- 夕食 -----');
    this.printPickupMenu(cafeMenuIterator);
  }

  private printPickupMenu(iterator: Iterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(`${menuItem.getName()}: ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
    }
  }
}
