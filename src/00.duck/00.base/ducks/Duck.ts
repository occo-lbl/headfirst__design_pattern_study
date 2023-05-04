export abstract class Duck {
  public quack(): void {
    console.log('ガーガー');
  }

  public swim(): void {
    console.log('泳ぎます');
  }

  public fly(): void {
    console.log('飛びます');
  }

  public abstract display(): void;
}
