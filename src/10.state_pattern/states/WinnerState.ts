import { GumballMachine } from '../context/GumballMachine';
import { State } from '../types/State';

export class WinnerState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public instertQuarter(): never {
    throw new Error('状態が正しくありません');
  }
  public ejectQuarter(): never {
    throw new Error('状態が正しくありません');
  }
  public turnCrank(): never {
    throw new Error('状態が正しくありません');
  }
  public dispense(): void {
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      console.log('当たりです🎉25セントで2つのガムボールがもらえます✨');
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('ガムボールがなくなりました');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}
