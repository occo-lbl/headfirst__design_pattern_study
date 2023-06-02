export interface Amplifier {
  on(): void;
  off(): void;
  setVolume(volume: number): void;
}
