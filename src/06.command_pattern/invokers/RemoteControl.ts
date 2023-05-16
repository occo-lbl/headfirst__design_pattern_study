import { Command } from '../types/Command';
import { NoCommand } from '../commands/NoCommand';

export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];

  constructor() {
    const noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPressed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPressed(slot: number): void {
    this.offCommands[slot].execute();
  }

  public printAllCommands(): string {
    let result = '\n ---------- リモコン ---------- \n';

    this.onCommands.forEach((v, i) => {
      const slotNum = `スロット ${i}`;
      const onCommandName = v.constructor.name;
      const offCommandName = this.offCommands[i].constructor.name;

      result += `[${slotNum}] ${onCommandName} ${offCommandName}\n`;
    });

    return result;
  }
}
