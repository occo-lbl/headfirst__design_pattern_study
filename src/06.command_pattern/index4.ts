import { Light } from './receivers/Light';
import { TV } from './receivers/TV';
import { Stereo } from './receivers/Stereo';
import { RemoteControl } from './invokers/RemoteControl';
import { LightOnCommand } from './commands/light/LightOnCommand';
import { LightOffCommand } from './commands/light/LightOffCommand';
import { StereoOnWithCDCommand } from './commands/stereo/StereoOnWithCDCommand';
import { StereoOffCommand } from './commands/stereo/StereoOffCommand';
import { TVOnCommand } from './commands/tv/TVOnCommand';
import { TVOffCommand } from './commands/tv/TVOffCommand';
import { Command } from './types/Command';
import { MacroCommand } from './commands/MacroCommand';

function run() {
  // インボーカ
  const remoteControl = new RemoteControl();

  // レシーバ
  const livingRoomLight = new Light('リビングルーム');
  const stereo = new Stereo('リビングルーム');
  const tv = new TV('リビングルーム');

  // コマンド
  const lightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
  const lightOff: LightOffCommand = new LightOffCommand(livingRoomLight);

  const stereoOn: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
  const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

  const tvOn: TVOnCommand = new TVOnCommand(tv);
  const tvOff: TVOffCommand = new TVOffCommand(tv);

  // マクロ設定
  const onMacroCommands: Command[] = [lightOn, stereoOn, tvOn];
  const onMacro: MacroCommand = new MacroCommand(onMacroCommands);

  const offMacroCommands: Command[] = [lightOff, stereoOff, tvOff];
  const offMacro: MacroCommand = new MacroCommand(offMacroCommands);

  remoteControl.setCommand(0, onMacro, offMacro);

  console.log(remoteControl.printAllCommands());

  console.log('----- マクロのOnを押す -----');
  remoteControl.onButtonWasPressed(0);

  console.log('----- マクロのOffを押す -----');
  remoteControl.offButtonWasPressed(0);
}

run();
