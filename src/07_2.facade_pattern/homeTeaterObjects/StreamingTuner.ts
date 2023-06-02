import { Tuner } from '../types/Tuner';

export class StreamingTuner implements Tuner {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  getType(): string {
    return this.type;
  }

  on(): void {
    console.log(`${this.type}をスイッチオン`);
  }
  off(): void {
    console.log(`${this.type}をスイッチオフ`);
  }
  setAm(): void {
    console.log(`${this.type}をAMにセット`);
  }
  setFm(): void {
    console.log(`${this.type}をFMにセット`);
  }
  setFrequency(frequency: number): void {
    console.log(`${this.type}の周波数を${frequency}にセット`);
  }
}
