


var knapsack = function(goods, totalWeight) {
  let possibleCombos = [];
  let highestValue = 0;
  for (let i = 0; i < goods.length; i++) {
    if (goods[i].weight <= totalWeight) {
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
}


// TODO: Write test cases!

let assertEqual = function(expected, actual) {
  if (expected === actual) {
    return true;
  }
  return `false, expected ${expected}, but got ${actual}`;
}

let itemsOne = [
  { name: 'radio', weight: 2, value: 20},
  { name: 'TV', weight: 10, value: 100},
  { name: 'vase', weight: 5, value: 15},
  { name: 'rolex', weight: 1, value: 2000},
  { name: 'statue', weight: 14, value: 200}
];

let itemsTwo = [
  { name: 'car', weight: 500, value: 20000},
  { name: 'house', weight: 1000, value: 2000000}
];

let itemsThree = [
  { weight: 5, value: 15},
  { weight: 3, value: 30},
  { weight: 1, value: 0.1},
  { weight: 2, value: 0.15}
];

console.log(assertEqual(2200, knapsack(itemsOne, 15)));
console.log(assertEqual(0, knapsack(itemsTwo, 15)));
console.log(assertEqual(30.15, knapsack(itemsThree, 5)));