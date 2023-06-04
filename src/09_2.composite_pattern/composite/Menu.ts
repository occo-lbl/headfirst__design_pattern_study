import { MenuComponent } from '../component/MenuComponent';

export class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    super();

    this.name = name;
    this.description = description;
  }

  public override add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }
  public override remove(removeIndex: number): void {
    this.menuComponents.splice(removeIndex, 1);
  }
  public override getChild(index: number): MenuComponent {
    return this.menuComponents[index];
  }

  public override getName(): string {
    return this.name;
  }
  public override getDescription(): string {
    return this.description;
  }

  public override print(): void {
    process.stdout.write(`\n${this.getName()}`);
    console.log(`、${this.getDescription()}`);
    console.log('------------------------------');

    for (const menuComponent of this.menuComponents) {
      menuComponent.print();
    }
  }
}
