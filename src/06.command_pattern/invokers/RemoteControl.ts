import { Command } from '../types/Command';
import { NoCommand } from '../commands/NoCommand';

export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command;

  constructor() {
    const noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }

    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPressed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPressed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPudhed(): void {
    this.undoCommand.undo();
  }

  public printAllCommands(): string {
    let result = '\n ---------- リモコン ---------- \n';

    this.onCommands.forEach((v, i) => {
      const slotNum = `スロット ${i}`;
      const onCommandName = v.constructor.name;
      const offCommandName = this.offCommands[i].constructor.name;

      result += `[${slotNum}] ${onCommandName} ${offCommandName}\n`;
    });

    const undoCommandName = this.undoCommand.constructor.name;
    result += `[アンドゥ] ${undoCommandName}`;

    return result;
  }
}
