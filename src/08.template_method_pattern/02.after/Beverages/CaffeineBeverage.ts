export abstract class CaffeineBeverage {
  public preparRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  private boilWater(): void {
    console.log('お湯を沸かす');
  }
  private pourInCup(): void {
    console.log('カップに注ぐ');
  }
}
