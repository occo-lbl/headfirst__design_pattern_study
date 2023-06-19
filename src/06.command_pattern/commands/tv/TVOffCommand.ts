import { Command } from '../../types/Command';
import { TV } from '../../receivers/TV';

export class TVOffCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  public execute(): void {
    this.tv.off();
  }

  public undo(): void {}
}
