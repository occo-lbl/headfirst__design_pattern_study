import { GumballMachine } from '../context/GumballMachine';
import { State } from '../types/State';

export class HasQuarterState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public instertQuarter(): void {
    console.log('もう一度25セントを投入することはできません。');
  }
  public ejectQuarter(): void {
    console.log('25セントをへんきゃくしました。');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  public turnCrank(): void {
    console.log('ハンドルを回しました');
    const winner = Math.floor(Math.random() * (1 - 0));

    const isWinner = winner === 0;
    if (isWinner && this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
  public dispense(): void {
    console.log('ガムボールが出せません');
  }
}
