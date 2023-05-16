import { Command } from '../../types/Command';
import { CeilingFan } from '../../receivers/CeilingFan';

export class CeilingFanMediumCommand implements Command {
  private ceilingFan: CeilingFan;
  private prevSpeed: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }

  public undo(): void {
    if (this.prevSpeed === CeilingFan.HIGH) {
      this.ceilingFan.hight();
    } else if (this.prevSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    } else if (this.prevSpeed === CeilingFan.LOW) {
      this.ceilingFan.low();
    } else if (this.prevSpeed === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
  }
}
