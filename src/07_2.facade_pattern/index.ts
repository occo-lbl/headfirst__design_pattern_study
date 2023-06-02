import { StreamingAmplifier } from './homeTeaterObjects/StreamingAmplifier';
import { StreamingTuner } from './homeTeaterObjects/StreamingTuner';
import { StreamingPlayer } from './homeTeaterObjects/StreamingPlayer';
import { Projector } from './homeTeaterObjects/Projector';
import { TeaterLights } from './homeTeaterObjects/TeaterLights';
import { Screen } from './homeTeaterObjects/Screen';
import { PopcornPopper } from './homeTeaterObjects/PopcornPopper';
import { HomeTeaterFacade } from './facade/HomeTeaterFacade';

function run() {
  const streamingTuner = new StreamingTuner('ストリーミングチューナー');
  const streamingPlayer = new StreamingPlayer('ストリーミングプレイヤー');
  const streamingAmplifier = new StreamingAmplifier(streamingTuner, streamingPlayer);
  const projector = new Projector(streamingPlayer);
  const teaterLights = new TeaterLights();
  const screen = new Screen();
  const popcornPopper = new PopcornPopper();

  const homeTeater = new HomeTeaterFacade(
    streamingTuner,
    streamingPlayer,
    streamingAmplifier,
    projector,
    teaterLights,
    screen,
    popcornPopper
  );

  homeTeater.watchMovie('スターウォーズ');
  console.log('');
  homeTeater.endMovie();
}

run();
