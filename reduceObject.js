//use a single .reduce to return an object with categories food and drink as props and strip out anything not food or drink from the list
//use arrow function as parameter of reduce
//ouput should be {food: ["chicken", "chips"], drink: ["milktea"]}

const data = [{type: "toys", name: "Lego"}, {type: "food", name: "chicken"}, {type: "food", name: "chips"}, {type: "drink", name: "milktea"}, {type: "toys", name: "plushie"}]

// const removeEdibles = data => {
//   return data.reduce((acc, item) => {
//     if (item.type === "food") {
//       acc.food.push(item.name);
//       return acc;
//     } else if (item.type === "drink") {
//       acc.drink.push(item.name);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, {food: [], drink: []});
// }

// console.log(removeEdibles(data));


//use a single .reduce to return an object with categories like food and drink as props
//can accept any categories
//use arrow function as parameter of reduce
//ouput should be {food: ["chicken", "chips"], drink: ["milktea"]}

const combineCategories = data => {
  return data.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [item.name];
      return acc;
    } else {
      acc[item.type].push(item.name);
      return acc;
    }
  }, {});
};

console.log(combineCategories(data));

// const obj = data.reduce((acc, item) => {
//   acc[item.type] = acc[item.type] ? [...acc[item.type], item.name] : [item.name]
//   return acc;
// }, {});

// console.log(obj)