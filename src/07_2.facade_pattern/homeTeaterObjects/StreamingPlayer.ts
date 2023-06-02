import { Player } from '../types/Player';

export class StreamingPlayer implements Player {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  getType(): string {
    return this.type;
  }

  public on() {
    console.log(`${this.type}をスイッチオン`);
  }
  public off() {
    console.log(`${this.type}をスイッチオフ`);
  }
  public play(movie: string): void {
    console.log(`${this.type}は「${movie}」を再生`);
  }
  public pause(): void {
    console.log(`${this.type}を一時停止します`);
  }
  public stop(): void {
    console.log(`${this.type}を停止します`);
  }
  public setSurroundAudio(): void {
    console.log();
  }
  public setTwoChannelAudio(): void {
    console.log();
  }
}
