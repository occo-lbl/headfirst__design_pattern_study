import { Command } from '../types/Command';

export class NoCommand implements Command {
  public execute(): void {}
}
