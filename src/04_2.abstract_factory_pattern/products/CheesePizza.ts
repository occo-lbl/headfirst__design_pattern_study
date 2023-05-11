import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "../types/PizzaIngredientFactory";

export class CheesePizza extends Pizza {
  protected ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();

    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`${this.name}の下準備`);
    
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}
