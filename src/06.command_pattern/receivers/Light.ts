export class Light {
  private place: string = '';

  constructor(place: string) {
    this.place = place;
  }

  public on(): void {
    console.log(`${this.place} 照明が付いています`);
  }

  public off(): void {
    console.log(`${this.place} 照明が消えています`);
  }
}
