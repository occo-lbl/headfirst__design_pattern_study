import { MallardDuck } from "./ducks/MallardDuck";
import { FlyRocketPowered } from "./behaviors/fly_Behavior/FlyRocketPowered";

function run() {
  const mallardDuck = new MallardDuck();
  mallardDuck.display();
  mallardDuck.performFly();
  mallardDuck.performQuack();

  console.log('');

  mallardDuck.setFlyBehavior(new FlyRocketPowered());
  mallardDuck.performFly();
}

run();