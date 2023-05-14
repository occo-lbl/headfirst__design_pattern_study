import { Command } from "../types/Command";
import { Stereo } from "../receivers/Stereo";

export class StereoOffCommand implements Command {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }
}
