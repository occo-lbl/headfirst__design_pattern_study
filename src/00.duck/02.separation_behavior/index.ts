import { MallardDuck } from "./ducks/MallardDuck";
import { Duck } from "./ducks/Duck";

function run() {
  const mallardDuck: Duck = new MallardDuck();
  mallardDuck.performFly();
  mallardDuck.performQuack();
}

run();