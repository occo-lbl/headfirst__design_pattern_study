export class Tea {
  public preparRecipe(): void {
    this.boilWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addLemon();
  }

  private boilWater(): void {
    console.log('お湯を沸かす');
  }
  private steepTeaBag(): void {
    console.log('紅茶を浸す');
  }
  private pourInCup(): void {
    console.log('カップに注ぐ');
  }
  private addLemon(): void {
    console.log('レモンを追加する');
  }
}
