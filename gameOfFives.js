/* Oktober Fest: Bjorg's Got A Drinking Problem
The month is Oktober. The climate is amenable. The beer is fresh. And cold.

Two clans go to war.

Sat on opposite sides of a viking long table, the Bavarian Beer Bears and the Scandinavian Schöllers prepare to go head-to-head in an historic challenge.

A Viking Game of Fives!

Vikings are friendly, beer guzzling folk. The aim of the game is for both teams to produce the same number of 5s so that the whole viking horde will recieve a free round of beer from the referee, Bjorg Bjorgeson.

However, Bjorg has been drinking all day and so has lost his ability to compare the number of fives that the Vikings are showing.

Create a function that takes in the two teams' arrays, compares the number of 5s shown and if they match, return "Drinks All Round! Free Beers on Bjorg!".

If they don't, return "Uh Oh! Bjorg's a donut! No beer for anyone!" .

It is guaranteed that both arrays will only contain integers 0 to 9.
*/

function countFives(arr){
  var total = arr.reduce(function(count, num) {
    if (num === 5) {
      return count += 1;
    } else {
      return count;
    }
  }, 0);
  return total;
}

function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
  var bavarianScore = countFives(bavarianBeerBears);
  var scandinavianScore = countFives(scandinavianSchöllers);

  if (bavarianScore === scandinavianScore) {
    return "Drinks All Round! Free Beers on Bjorg!";
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!";
  }
}
