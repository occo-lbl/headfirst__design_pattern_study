import { MenuComponent } from '../component/MenuComponent';

export class Waitless {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu(): void {
    this.allMenus.print();
  }
}
