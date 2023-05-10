import { Pizza } from "../../products/Pizza";
import { PizzaStore } from "../PizzaStore";
import { NYStyleCheesePizza } from "../../products/NY/NYStyleCheesePizza";
import { NYStyleVeggiePizza } from "../../products/NY/NYStyleVeggiePizza";
import { NonExistingPizza } from "../../products/NonExistingPizza";

export class NYPizzaStore extends PizzaStore {

  public createPizza(type: string): Pizza {
    if (type === 'チーズ') {
      return new NYStyleCheesePizza();
    } else if (type === '野菜') {
      return new NYStyleVeggiePizza();
    } else {
      return new NonExistingPizza();
    }
  }
}
