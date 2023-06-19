export class Coffee {
  public preparRecipe(): void {
    this.boilWater();
    this.brewCoffeeGrinds();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  private boilWater(): void {
    console.log('お湯を沸かす');
  }
  private brewCoffeeGrinds(): void {
    console.log('フィルターでコーヒーをドリップする');
  }
  private pourInCup(): void {
    console.log('カップに注ぐ');
  }
  private addSugarAndMilk(): void {
    console.log('砂糖とミルクを追加する');
  }
}
