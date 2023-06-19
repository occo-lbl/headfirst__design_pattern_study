export abstract class Pizza {
  protected name: string = '';
  protected dough: string = '';
  protected sauce: string = '';
  protected toppings: string[] = [];

  public getName(): string {
    return this.name;
  }

  public prepare(): void {
    console.log(`${this.name}を下準備`);
    console.log(`生地をこねる`);
    console.log(`ソースを追加`);
    console.log(`トッピングを追加:`);
    for (const t of this.toppings) {
      console.log(` ${t}`);
    }
  }

  public bake() {
    console.log('180度で2分間焼く');
  }
  
  public cut() {
    console.log('ピザを扇形にカットする');
  }
  
  public box() {
    console.log('PizzaStoreの箱に、ピザを入れる');
  }
}
