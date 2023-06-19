import { MallardDuck } from "./ducks/MallardDuck";
import { RedheadDuck } from "./ducks/RedheadDuck";
import { RubberDuck } from "./ducks/RubberDuck";
import { DecoyDuck } from "./ducks/DecoyDuck";

function run() {
  const ducks = [MallardDuck, RedheadDuck, RubberDuck, DecoyDuck];

  for(const duck of ducks) {
    const duckInstance = new duck();
    duckInstance.display();
    duckInstance.fly();
  }
}

run();