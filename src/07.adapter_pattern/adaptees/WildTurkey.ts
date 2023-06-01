import { Turkey } from '../types/Turkey';

export class WildTurkey implements Turkey {
  public gobble(): void {
    console.log('ゴロゴロ');
  }
  public fly(): void {
    console.log('飛んでいます');
  }
}
