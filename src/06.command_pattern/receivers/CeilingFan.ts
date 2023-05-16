export class CeilingFan {
  public static HIGH: number = 3;
  public static MEDIUM: number = 2;
  public static LOW: number = 1;
  public static OFF: number = 1;
  private place: string = '';
  private speed: number;

  constructor(place: string) {
    this.place = place;
    this.speed = CeilingFan.OFF;
  }

  public hight(): void {
    this.speed = CeilingFan.HIGH;

    console.log(`${this.place} シーリングファンの強さは「強」です`);
  }
  
  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    
    console.log(`${this.place} シーリングファンの強さは「中」です`);
  }
  
  public low(): void {
    this.speed = CeilingFan.LOW;
    
    console.log(`${this.place} シーリングファンの強さは「弱」です`);
  }
  
  public off(): void {
    this.speed = CeilingFan.OFF;
    
    console.log(`${this.place} シーリングファンは止まっています`);
  }

  public getSpeed(): number {
    return this.speed;
  }
}
