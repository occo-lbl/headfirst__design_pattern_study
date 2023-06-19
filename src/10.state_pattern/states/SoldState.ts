import { GumballMachine } from '../context/GumballMachine';
import { State } from '../types/State';

export class SoldState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public instertQuarter(): void {
    console.log('お待ちください。ガムボールを出す準備をしています。');
  }
  public ejectQuarter(): void {
    console.log('申し訳ありません。すでにハンドルを回しています。');
  }
  public turnCrank(): void {
    console.log('2回回してもガムボールをもう一つ手に入れることはできません!');
  }
  public dispense(): void {
    console.log('ガムボールが出せません');
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('ガムボールがなくなりました。');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}
