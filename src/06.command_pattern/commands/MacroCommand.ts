import { Command } from '../types/Command';

export class MacroCommand implements Command {
  private commands: Command[] = [];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  public execute(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }

  public undo(): void {}
}
