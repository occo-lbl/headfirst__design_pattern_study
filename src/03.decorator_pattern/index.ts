import { Espresso } from "./beverages/Espresso";
import { DarkRoast } from "./beverages/DarkRoast";
import { HouseBlend } from "./beverages/HouseBlend";
import { Mocha } from "./decorators/Mocha";
import { Soy } from "./decorators/Soy";
import { Whip } from "./decorators/Whip";

function run() {
  console.log('--- 注文開始 ---');

  const espresso = new Espresso();
  console.log(`${espresso.getDescription()} $${espresso.cost()}`);
  
  const darkRoast = new DarkRoast();
  const darkRoast_mocha = new Mocha(darkRoast);
  const darkRoast_mocha_mocha = new Mocha(darkRoast_mocha);
  const darkRoast_mocha_mocha_whip = new Whip(darkRoast_mocha_mocha);
  console.log(`${darkRoast_mocha_mocha_whip.getDescription()} $${darkRoast_mocha_mocha_whip.cost()}`);
  
  const houseBlend = new HouseBlend();
  const houseBlend_soy = new Soy(houseBlend);
  const houseBlend_soy_mocha = new Mocha(houseBlend_soy);
  const houseBlend_soy_mocha_whip = new Whip(houseBlend_soy_mocha);
  console.log(`${houseBlend_soy_mocha_whip.getDescription()} $${houseBlend_soy_mocha_whip.cost()}`);

  console.log('--- 注文終了 ---');
}

run();