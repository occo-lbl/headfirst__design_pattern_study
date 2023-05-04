import { MallardDuck } from "./ducks/MallardDuck";
import { RedheadDuck } from "./ducks/RedheadDuck";
import { RubberDuck } from "./ducks/RubberDuck";
import { DecoyDuck } from "./ducks/DecoyDuck";

function run() {
  const mallardDuck = new MallardDuck();
  mallardDuck.display();
  mallardDuck.fly();
  mallardDuck.quack();

  console.log('---');

  const redheadDuck = new RedheadDuck();
  redheadDuck.display();
  redheadDuck.fly();
  redheadDuck.quack();

  console.log('---');

  const rubberDuck = new RubberDuck();
  rubberDuck.display();
  rubberDuck.quack();

  console.log('---');

  const decoyDuck = new DecoyDuck();
  decoyDuck.display();
}

run();