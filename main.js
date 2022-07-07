/*
 * Problem:
 * Write a minesweeper program to find out mines in a field row.
 * Entities:
 * Mine
 * Battlefield
 * 
 * The code describes the steps done
 * 
 */

/* While loop version */

console.log ("Solution using the while loop:");

const battleField = `tree 💣️ tree way river way path secret-path
💣️, car, cat cat person, soldier 💣️ mercenary, bullet tree
bullet 💣️ granade tank airplane helicopter 💣️ dog tree
kid mother dog dog 💣️ street 💣️ mines`;

const mine = '💣️';

let i = 0;  // i = position
while (true) {
  let foundPos = battleField.indexOf(mine, i);
  if (foundPos == -1) break; // -1 = first pos from right to left

  console.log(`There is a mine after the position: ${foundPos} 💣️`);
  i = foundPos + 1;
}

/* For loop version */

console.log ("Solution using the for loop:");

/*
Every emoji holds more than 1 char position, so the previous 
long string requires more emoji management than just .indexOf()
and can not be used in the foor loop version
*/

const mine = 'M';
const battleField = `soldier M M rifle M`;

for (let i = 0; i < battleField.length; i++) {
  let foundPos = battleField.indexOf(mine, i);
  console.log(`Position: ${i}`);
  if (foundPos == i) {
    console.log ("💣️💣️ MINE AHEAD 💣️💣️");
  }
}
