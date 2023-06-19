import { Amplifier } from '../types/Amplifier';
import { Player } from '../types/Player';
import { Tuner } from '../types/Tuner';

export class StreamingAmplifier implements Amplifier {
  private tuner: Tuner;
  private player: Player;

  constructor(tuner: Tuner, player: Player) {
    this.tuner = tuner;
    this.player = player;
  }

  on(): void {
    console.log('アンプをスイッチオン');
  }
  off(): void {
    console.log('アンプをスイッチオフ');
  }
  setVolume(volume: number): void {
    console.log(`アンプの音量を${volume}に設定`);
  }
  setStereoSound(): void {
    console.log('アンプのステレオサウンドをスイッチオン');
  }
  setSurroundSound(): void {
    console.log('アンプのサラウンドサウンドをスイッチオン');
  }
  setPlayer(): void {
    console.log(`${this.player.getType()}をセットする`);
  }
  setTuner(): void {
    console.log(`${this.tuner.getType()}をセットする`);
  }
}
