import { Waitress } from './waitresses/Waitress';
import { PancakeHouseMenu } from './menus/PancakeHouseMenu';
import { DinerMenu } from './menus/DinerMenu';
import { CafeMenu } from './menus/CafeMenu';
import { Menu } from './types/Menu';
import { WaitressUseAbstractMenu } from './waitresses/WaitressUseAbstractMenu';

function run() {
  const pancakeHouseMenu = new PancakeHouseMenu();
  const dinerMenu = new DinerMenu();
  const cafeMenu = new CafeMenu();

  const waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);

  // 抽象化したメニューの配列を使用した場合
  // const menus: Menu[] = [pancakeHouseMenu, dinerMenu, cafeMenu];
  // const waitress = new WaitressUseAbstractMenu(menus);

  waitress.printMenu();
}

run();
