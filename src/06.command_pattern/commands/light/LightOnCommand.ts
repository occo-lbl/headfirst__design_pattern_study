import { Command } from '../../types/Command';
import { Light } from '../../receivers/Light';

export class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}
