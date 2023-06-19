import { StreamingTuner } from '../homeTeaterObjects/StreamingTuner';
import { StreamingPlayer } from '../homeTeaterObjects/StreamingPlayer';
import { StreamingAmplifier } from '../homeTeaterObjects/StreamingAmplifier';
import { Projector } from '../homeTeaterObjects/Projector';
import { TeaterLights } from '../homeTeaterObjects/TeaterLights';
import { Screen } from '../homeTeaterObjects/Screen';
import { PopcornPopper } from '../homeTeaterObjects/PopcornPopper';

export class HomeTeaterFacade {
  private tuner: StreamingTuner;
  private player: StreamingPlayer;
  private amp: StreamingAmplifier;
  private projector: Projector;
  private lights: TeaterLights;
  private screen: Screen;
  private popper: PopcornPopper;

  constructor(
    tuner: StreamingTuner,
    player: StreamingPlayer,
    amp: StreamingAmplifier,
    projector: Projector,
    lights: TeaterLights,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.tuner = tuner;
    this.player = player;
    this.amp = amp;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  public watchMovie(movie: string): void {
    console.log('----- 映画を観る準備をします -----');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setPlayer();
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  public endMovie(): void {
    console.log('----- ムービーシアターを停止します -----');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.off();
  }
}
