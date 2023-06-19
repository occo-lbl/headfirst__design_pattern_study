import { NYPizzaStore } from "./creators/NY/NYPizzaStore";

function run() {
  const nyStore = new NYPizzaStore();
  const nyStylePizza = nyStore.orderPizza('チーズ');
  console.log('');
  console.log(`あなたの注文: ${nyStylePizza.getName()}`);
}

run();
