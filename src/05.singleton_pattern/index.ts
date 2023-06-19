import { ChocolateBoiler } from "./ChocolateBoiler";

function run() {
  const boiler = ChocolateBoiler.getInstance();

  boiler.fill();
  boiler.boil();
  boiler.drain();
}

run();
