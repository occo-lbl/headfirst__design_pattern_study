import { CeilingFan } from './receivers/CeilingFan';
import { RemoteControl } from './invokers/RemoteControl';
import { CeilingFanHighCommand } from './commands/ceilingFan/CeilingFanHighCommand';
import { CeilingFanMediumCommand } from './commands/ceilingFan/CeilingFanMediumCommand';
import { CeilingFanOffCommand } from './commands/ceilingFan/CeilingFanOffCommand';

function run() {
  // インボーカ
  const remoteControl = new RemoteControl();

  // レシーバ
  const ceilingFan = new CeilingFan('リビングルーム');

  // コマンド
  const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
  const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
  const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

  // 実行
  remoteControl.setCommand(0, ceilingFanHigh, ceilingFanOff);
  remoteControl.setCommand(1, ceilingFanMedium, ceilingFanOff);

  remoteControl.onButtonWasPressed(0);
  remoteControl.offButtonWasPressed(0);

  console.log(remoteControl.printAllCommands());

  remoteControl.undoButtonWasPudhed();
  remoteControl.onButtonWasPressed(1);
  
  console.log(remoteControl.printAllCommands());
  
  remoteControl.undoButtonWasPudhed();
}

run();
