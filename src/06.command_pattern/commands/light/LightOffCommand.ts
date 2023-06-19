import { Command } from '../../types/Command';
import { Light } from '../../receivers/Light';

export class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}
