import { Pizza } from "../../products/Pizza";
import { PizzaStore } from "../PizzaStore";
import { ChicagoStyleCheesePizza } from "../../products/chicago/ChicagoStyleCheesePizza";
import { ChicagoStyleVeggiePizza } from "../../products/chicago/ChicagoStyleVeggiePizza";
import { NonExistingPizza } from "../../products/NonExistingPizza";

export class ChicagoPizzaStore extends PizzaStore {

  protected createPizza(type: string): Pizza {
    if (type === 'チーズ') {
      return new ChicagoStyleCheesePizza();
    } else if (type === '野菜') {
      return new ChicagoStyleVeggiePizza();
    } else {
      return new NonExistingPizza();
    }
  }
}
