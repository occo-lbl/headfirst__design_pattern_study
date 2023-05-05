import { Espresso } from "./beverages/Espresso";
import { DarkRoast } from "./beverages/DarkRoast";
import { HouseBlend } from "./beverages/HouseBlend";
import { Mocha } from "./decorators/Mocha";
import { Soy } from "./decorators/Soy";
import { Whip } from "./decorators/Whip";

function run() {
  console.log('--- 注文開始 ---');

  let beverage = new Espresso();
  console.log(`${beverage.getDescription()} $${beverage.cost()}`);
  
  let beverage2 = new DarkRoast();
  beverage2 = new Mocha(beverage2);
  beverage2 = new Mocha(beverage2);
  beverage2 = new Whip(beverage2);
  console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);
  
  let beverage3 = new HouseBlend();
  beverage3 = new Soy(beverage3);
  beverage3 = new Mocha(beverage3);
  beverage3 = new Whip(beverage3);
  console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);

  console.log('--- 注文終了 ---');
}

run();