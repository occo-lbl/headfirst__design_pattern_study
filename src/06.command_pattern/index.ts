import { Light } from './receivers/Light';
import { LightOnCommand } from './commands/LightOnCommand';
import { LightOffCommand } from './commands/LightOffCommand';
import { RemoteControl } from './invokers/RemoteControl';
import { Stereo } from './receivers/Stereo';
import { StereoOnWithCDCommand } from './commands/StereoOnWithCDCommand';
import { StereoOffCommand } from './commands/StereoOffCommand';

function run() {
  // インボーカ
  const remoteControl = new RemoteControl();

  // レシーバ
  const livingRoomLight = new Light('リビングルーム');
  const kitchebRoomLight = new Light('キッチン');
  const stereo = new Stereo('リビングルーム');

  // コマンド
  const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);

  const kitchebRoomLightOn: LightOnCommand = new LightOnCommand(kitchebRoomLight);
  const kitchebRoomLightOff: LightOffCommand = new LightOffCommand(kitchebRoomLight);

  const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
  const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

  // 実行
  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchebRoomLightOn, kitchebRoomLightOff);
  remoteControl.setCommand(2, stereoOnWithCD, stereoOff);

  console.log(remoteControl.printAllCommands());

  remoteControl.onButtonWasPressed(0);
  remoteControl.offButtonWasPressed(0);
  remoteControl.onButtonWasPressed(1);
  remoteControl.offButtonWasPressed(1);
  remoteControl.onButtonWasPressed(2);
  remoteControl.offButtonWasPressed(2);
}

run();
