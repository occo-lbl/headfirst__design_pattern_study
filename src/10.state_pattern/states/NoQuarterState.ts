import { GumballMachine } from '../context/GumballMachine';
import { State } from '../types/State';

export class NoQuarterState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public instertQuarter(): void {
    console.log('25セントを投入しました。');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }
  public ejectQuarter(): void {
    console.log('25セントを投入していません。');
  }
  public turnCrank(): void {
    console.log('ハンドルを回しましたが、25セントを投入していません');
  }
  public dispense(): void {
    console.log('まずお金を払う必要があります');
  }
}
