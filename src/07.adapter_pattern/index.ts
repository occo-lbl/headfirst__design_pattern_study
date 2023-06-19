import { MallardDuck } from './MallardDuck';
import { WildTurkey } from './adaptees/WildTurkey';
import { TurkeyAdapter } from './adapters/TurkeyAdapter';
import { Duck } from './types/Duck';

function testDuck(duck: Duck) {
  duck.quack();
  duck.fly();
}

function run() {
  const duck = new MallardDuck();

  // Adaptee
  const turkey = new WildTurkey();
  // Adapter
  const turkeyAdapter = new TurkeyAdapter(turkey);

  console.log('--- Duck ---');
  testDuck(duck);

  console.log('\n--- TurkeyAdapter ---');
  testDuck(turkeyAdapter);
}

run();
