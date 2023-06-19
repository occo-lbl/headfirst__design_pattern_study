import { State } from '../types/State';
import { SoldOutState } from '../states/SoldOutState';
import { NoQuarterState } from '../states/NoQuarterState';
import { HasQuarterState } from '../states/HasQuarterState';
import { SoldState } from '../states/SoldState';
import { WinnerState } from '../states/WinnerState';

export class GumballMachine {
  private soldOutState: State;
  private noQuarterState: State;
  private hasQuarterState: State;
  private soldState: State;
  private winnerState: State;

  private state: State;
  private count: number = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  public setState(state: State): void {
    this.state = state;
  }
  public getSoldOutState(): State {
    return this.soldOutState;
  }
  public getNoQuarterState(): State {
    return this.noQuarterState;
  }
  public getHasQuarterState(): State {
    return this.hasQuarterState;
  }
  public getSoldState(): State {
    return this.soldState;
  }
  public getWinnerState(): State {
    return this.winnerState;
  }
  public getCount(): number {
    return this.count;
  }

  public instertQuarter(): void {
    this.state.instertQuarter();
  }
  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }
  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public releaseBall(): void {
    console.log('ガムボールがスロットから出てきます。');

    if (this.count != 0) {
      this.count--;
    }
  }

  public printState(): void {
    console.log('▽-------------------------------▽');
    console.log('モデル名 : #2004');
    console.log(`在庫 : ${this.count}個のガムボール`);
    console.log(`マシンの状態 : ${this.state.constructor.name}`);
    console.log('△-------------------------------△');
  }
}
