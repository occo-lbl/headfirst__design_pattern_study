import { Coffee } from './Beverages/Coffee';
import { Tea } from './Beverages/Tea';

function run() {
  const coffee = new Coffee();
  const tea = new Tea();

  console.log('----- コーヒーを淹れる -----');
  coffee.preparRecipe();

  console.log('\n----- コーヒーを淹れる -----');
  tea.preparRecipe();
}

run();
