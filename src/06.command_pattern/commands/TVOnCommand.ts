import { Command } from '../types/Command';
import { TV } from '../receivers/TV';

export class TVOnCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  public execute(): void {
    this.tv.on();
    this.tv.setDvd();
  }

  public undo(): void {}
}
