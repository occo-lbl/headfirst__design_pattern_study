import { Light } from './receivers/Light';
import { LightOnCommand } from './commands/light/LightOnCommand';
import { LightOffCommand } from './commands/light/LightOffCommand';
import { RemoteControl } from './invokers/RemoteControl';

function run() {
  // インボーカ
  const remoteControl = new RemoteControl();

  // レシーバ
  const livingRoomLight = new Light('リビングルーム');

  // コマンド
  const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);

  // 実行
  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);

  remoteControl.onButtonWasPressed(0);
  remoteControl.offButtonWasPressed(0);

  console.log(remoteControl.printAllCommands());

  remoteControl.undoButtonWasPudhed();
  remoteControl.offButtonWasPressed(0);
  remoteControl.onButtonWasPressed(0);

  console.log(remoteControl.printAllCommands());

  remoteControl.undoButtonWasPudhed();
}

run();
