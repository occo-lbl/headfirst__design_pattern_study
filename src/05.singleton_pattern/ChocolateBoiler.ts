export class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (!ChocolateBoiler.uniqueInstance) {
      ChocolateBoiler.uniqueInstance = new ChocolateBoiler();
    }

    return ChocolateBoiler.uniqueInstance;
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;

      console.log('牛乳とチョコレートの混合液でボイラーを満たす');
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      console.log('溶けた牛乳とチョコレートの混合液を空にする');

      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      console.log('中身を溶かす');

      this.boiled = true;
    }
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }
}
