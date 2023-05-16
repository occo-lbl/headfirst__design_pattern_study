import { Light } from "./receivers/Light";
import { LightOnCommand } from "./commands/LightOnCommand";
import { SimpleRemoteControl } from "./invokers/SimpleRemoteControl";

function run() {
  // インボーカ
  const remote = new SimpleRemoteControl();

  // レシーバ
  const light = new Light();

  // コマンド
  const lightOn = new LightOnCommand(light);

  remote.setCommand(lightOn);
  remote.buttonWasPressed();
}

run();
