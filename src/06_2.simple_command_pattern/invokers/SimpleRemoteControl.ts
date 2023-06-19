import { Command } from "../types/Command";

export class SimpleRemoteControl {
  private slot?: Command;

  constructor() { }

  public setCommand(command: Command): void {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot?.execute();
  }
}
