export abstract class MenuComponent {
  public add(menuComponent: MenuComponent): void {
    throw new Error('その操作はサポートされていません');
  }
  public remove(removeIndex: number): void {
    throw new Error('その操作はサポートされていません');
  }
  public getChild(index: number): MenuComponent {
    throw new Error('その操作はサポートされていません');
  }

  public getName(): string {
    throw new Error('その操作はサポートされていません');
  }
  public getDescription(): string {
    throw new Error('その操作はサポートされていません');
  }
  public getPrice(): number {
    throw new Error('その操作はサポートされていません');
  }
  public isVegetarian(): boolean {
    throw new Error('その操作はサポートされていません');
  }

  public print(): void {
    throw new Error('その操作はサポートされていません');
  }
}
