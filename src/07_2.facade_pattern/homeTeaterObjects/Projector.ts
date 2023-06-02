import { Player } from '../types/Player';

export class Projector {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  public on() {
    console.log('プロジェクターをスイッチオン');
  }
  public off() {
    console.log('プロジェクターをスイッチオフ');
  }
  public wideScreenMode(): void {
    console.log('プロジェクターはワイドスクリーンモード（縦横比16x9）です');
  }
  public tvMode(): void {
    console.log('プロジェクターはTVモード（縦横比4x3）です');
  }
}
