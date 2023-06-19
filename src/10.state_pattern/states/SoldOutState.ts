import { GumballMachine } from '../context/GumballMachine';
import { State } from '../types/State';

export class SoldOutState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public instertQuarter(): void {
    console.log('25セントを投入することはできません。売り切れです。');
  }
  public ejectQuarter(): void {
    console.log('返金できません。まだ、25セントを投入していません。');
  }
  public turnCrank(): void {
    console.log('ハンドルを回しましたが、ガムボールがありません');
  }
  public dispense(): void {
    console.log('ガムボールが出せません');
  }
}
