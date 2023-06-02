export class TeaterLights {
  public on() {
    console.log('シアターの天井照明をスイッチオン');
  }
  public off() {
    console.log('シアターの天井照明をスイッチオフ');
  }
  public dim(darkness: number) {
    console.log(`シアターの天井照明を${darkness}%まで暗くします`);
  }
}
