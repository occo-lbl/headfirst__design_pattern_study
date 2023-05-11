import { NonExistingPizza } from "../../products/NonExistingPizza";

import { Pizza } from "../../products/Pizza";

import { PizzaStore } from "../PizzaStore";
import { NYPizzaIngredientFactory } from "../../factories/NYPizzaIngredientFactory";
import { CheesePizza } from "../../products/CheesePizza";
import { VeggiePizza } from "../../products/VeggiePizza";
import { ClamsPizza } from "../../products/ClamsPizza";
import { PepperoniPizza } from "../../products/PepperoniPizza";

export class NYPizzaStore extends PizzaStore {

  protected createPizza(type: string): Pizza {
    let pizza = new NonExistingPizza();
    const ingredientFactory = new NYPizzaIngredientFactory();

    if (type === 'チーズ') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('ニューヨークスタイルチーズピザ');
    } else if (type === '野菜') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('ニューヨークスタイル野菜ピザ');
    } else if (type === 'アサリ') {
      pizza = new ClamsPizza(ingredientFactory);
      pizza.setName('ニューヨークスタイルアサリピザ');
    } else if (type === 'ペパロニ') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('ニューヨークスタイルペパロニピザ');
    }

    return pizza;
  }
}
