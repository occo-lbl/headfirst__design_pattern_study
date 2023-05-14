export class Stereo {
  private place: string = "";

  constructor(place: string) {
    this.place = place;
  }

  public on(): void {
    console.log(`${this.place} オーディオのが電源が入っています`);
  }

  public off(): void {
    console.log(`${this.place} オーディオのが電源が切れています`);
  }

  public setCd(): void {
    console.log(`${this.place} CDをセットしました`);
  }

  public setDvd(): void {
    console.log(`${this.place} DVDをセットしました`);
  }

  public setRadio(): void {
    console.log(`${this.place} ラジオをセットしました`);
  }

  public setVolume(volume: number): void {
    console.log(`${this.place} 音量を${volume}に設定しました`);
  }
}
