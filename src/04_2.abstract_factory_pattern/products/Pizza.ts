import { Dough } from "../types/Dough";
import { Sauce } from "../types/Sauce";
import { Veggies } from "../types/Veggies";
import { Cheese } from "../types/Cheese";
import { Pepperoni } from "../types/Pepperoni";
import { Clams } from "../types/Clams";

export abstract class Pizza {
  protected name: string = '';

  protected dough: Dough = '';
  protected sauce: Sauce = '';
  protected veggies: Veggies[] = [];
  protected cheese: Cheese = '';
  protected pepperoni: Pepperoni = '';
  protected clam: Clams = '';

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }

  public abstract prepare(): void;

  public bake() {
    console.log('180度で25分間焼く');
  }
  
  public cut() {
    console.log('ピザを扇形にカットする');
  }
  
  public box() {
    console.log('PizzaStoreの箱に、ピザを入れる');
  }

  public toString() {
    // ピザを出力するコード
  }
}
