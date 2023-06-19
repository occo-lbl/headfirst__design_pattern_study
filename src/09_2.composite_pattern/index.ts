import { Waitless } from './client/Waitless';
import { MenuComponent } from './component/MenuComponent';
import { Menu } from './composite/Menu';
import { MenuItem } from './leaf/MenuItem';

function run() {
  const pancakeHouseMenu: MenuComponent = new Menu('パンケーキハウスメニュー', '朝食');
  const dinerMenu: MenuComponent = new Menu('食堂メニュー', '昼食');
  const cafeMenu: MenuComponent = new Menu('カフェメニュー', '夕食');
  const dessertMenu: MenuComponent = new Menu('デザートメニュー', 'デザート');

  const allMenus: MenuComponent = new Menu('すべてのメニュー', 'すべてを統合したメニュ＝');
  allMenus.add(pancakeHouseMenu);
  allMenus.add(dinerMenu);
  allMenus.add(cafeMenu);

  dinerMenu.add(new MenuItem('パスタ', 'マリナラソーススパゲティとサワードウパン', true, 3.89));
  dinerMenu.add(dessertMenu);

  dessertMenu.add(
    new MenuItem(
      'アップルパイ',
      'バニラアイスクリ＝ムを乗せたフレーク状生地のアップルパイ',
      true,
      1.59
    )
  );

  const waitless: Waitless = new Waitless(allMenus);
  waitless.printMenu();
}

run();
