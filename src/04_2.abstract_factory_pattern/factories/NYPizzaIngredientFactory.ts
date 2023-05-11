import { ThinCrustDough } from "../ingredients/ThinCrustDough";
import { MarinaraSauce } from "../ingredients/MarinaraSauce";
import { ReggianoCheese } from "../ingredients/ReggianoCheese";
import { Grlic } from "../ingredients/veggies/Grlic";
import { Mashroom } from "../ingredients/veggies/Mashroom";
import { Onion } from "../ingredients/veggies/Onion";
import { RedPepper } from "../ingredients/veggies/RedPepper";
import { SlicedPepperoni } from "../ingredients/SlicedPepperoni";
import { FreshClams } from "../ingredients/FreshClams";
import { Cheese } from "../types/Cheese";
import { Clams } from "../types/Clams";
import { Dough } from "../types/Dough";
import { Pepperoni } from "../types/Pepperoni";
import { PizzaIngredientFactory } from "../types/PizzaIngredientFactory";
import { Sauce } from "../types/Sauce";
import { Veggies } from "../types/Veggies";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough();
  }

  public createSauce(): Sauce {
    return new MarinaraSauce();
  }

  public createCheese(): Cheese {
    return new ReggianoCheese();
  }

  public createVeggies(): Veggies[] {
    return [new Grlic(), new Mashroom(), new Onion(), new RedPepper()];
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  
  public createClams(): Clams {
    return new FreshClams();
  }
}
