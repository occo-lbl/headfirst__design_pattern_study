export interface Tuner {
  getType(): string;
  on(): void;
  off(): void;
  setAm(): void;
  setFm(): void;
  setFrequency(frequency: number): void;
}
