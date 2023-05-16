export class TV {
  private place: string = '';

  constructor(place: string) {
    this.place = place;
  }

  public on(): void {
    console.log(`${this.place} テレビの電源が入っています`);
  }

  public off(): void {
    console.log(`${this.place} テレビの電源が切れています`);
  }

  public setDvd(): void {
    console.log(`${this.place} テレビのチャンネルがDVDにセットされました`);
  }

  public setVolume(volume: number): void {
    console.log(`${this.place} テレビの音量を${volume}に設定しました`);
  }
}
