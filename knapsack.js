/* ----------------------------------------------------------
A Thief has a knapsack that can hold X lbs of stolen goods
Each stolen good is worth a certain amount of cash, but
the stolen good also weighs a certain weight. This means that
the thief has to pick an optimal combination of items!
The Thief can't pick the same item twice.

What is the maximum worth of goods that the thief can steal?
-----------------------------------------------------------*/

var knapsack = function(goods, totalWeight) {
  let possibleCombos = [];
  let highestValue = 0;
  for (let i = 0; i < goods.length; i++) {
    if (goods[i].weight === totalWeight) {
      let combo = {weight: 0, value: 0, items: []};
      combo.weight += goods[i].weight;
      combo.value += goods[i].value;
      combo.items.push(goods[i]);
      possibleCombos.push(combo);
    }
    if (goods[i].weight < totalWeight) {
      let combo = {weight: 0, value: 0, items: []};
      combo.weight += goods[i].weight;
      combo.value += goods[i].value;
      combo.items.push(goods[i]);
      for (let j = 0; j < goods.length; j++) {
        if (i !== j) {
          if (combo.weight + goods[j].weight <= totalWeight) {
            combo.weight += goods[j].weight;
            combo.value += goods[j].value;
            combo.items.push(goods[j]);
          }   
        }
      }
      possibleCombos.push(combo);
    }
  }
    
  if (possibleCombos.length === 0) {
    return highestValue;
  }
    
  for (let k = 0; k < possibleCombos.length; k++) {
    if (possibleCombos[k].value > highestValue) {
      highestValue = possibleCombos[k].value;
    }
  }

  return highestValue;
};


// TODO: Write test cases!

let assertEqual = function(expected, actual) {
  if (expected === actual) {
    return true;
  }
  return `false, expected ${expected}, but got ${actual}`;
}

let items = [
  { weight: 10, value: 850},
  { weight: 1, value: 150},
  { weight: 1, value: 100},
  { weight: 1, value: 50},
  { weight: 5, value: 350},
  { weight: 9, value: 900},
  { weight: 11, value: 1000},
  { weight: 20, value: 10000},
  { weight: 60, value: 5},
  { weight: 27, value: 500},
  { weight: 25, value: 1},
  { weight: 50, value: 10000000}
];

let itemsTwo = [];


console.log(assertEqual(0, knapsack(items, 0)));
console.log(assertEqual(150, knapsack(items, 1)));
console.log(assertEqual(250, knapsack(items, 2)));
console.log(assertEqual(300, knapsack(items, 3)));
console.log(assertEqual(300, knapsack(items, 4)));
console.log(assertEqual(350, knapsack(items, 5)));
console.log(assertEqual(500, knapsack(items, 6)));
console.log(assertEqual(600, knapsack(items, 7)));
console.log(assertEqual(650, knapsack(items, 8)));
console.log(assertEqual(900, knapsack(items, 9)));
console.log(assertEqual(1050, knapsack(items, 10)));
console.log(assertEqual(1150, knapsack(items, 11)));
console.log(assertEqual(1200, knapsack(items, 12)));
console.log(assertEqual(1250, knapsack(items, 13)));
console.log(assertEqual(1300, knapsack(items, 14)));
console.log(assertEqual(10000000, knapsack(items, 50)));
console.log(assertEqual(10000150, knapsack(items, 51)));
console.log(assertEqual(0, knapsack(itemsTwo, 5)));