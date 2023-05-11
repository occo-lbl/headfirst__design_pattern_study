import { Pizza } from "./Pizza";

export class NonExistingPizza extends Pizza {

  constructor() {
    super();

    this.name = '存在しないピザです';
    this.dough = '存在しないピザです';
    this.sauce = '存在しないピザです';
  }

  public prepare(): void {
    console.log(`${this.name}の下準備`);
    
    this.dough = '存在しないピザです';
    this.sauce = '存在しないピザです';
  }
}
