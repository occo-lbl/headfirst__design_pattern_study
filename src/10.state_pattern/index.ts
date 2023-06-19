import { GumballMachine } from './context/GumballMachine';

function run() {
  const gumNumber = 5;
  const gumballMachine = new GumballMachine(gumNumber);

  gumballMachine.printState();

  gumballMachine.instertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.printState();

  gumballMachine.instertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.instertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.printState();
}

run();
