// let todo = prompt('what would you like to do');
// let list = [1, 2, 3];

// while (todo !== 'quit' && todo !== 'q') {
//   if (todo === 'list') {
//     console.log('**************');
//     for (let i = 0; i < list.length; i++) {
//       console.log(`${i}. ${list[i]}`);
//     }
//     console.log('**************');
//   }

//   if (todo === 'new') {
//     const newtodo = prompt('what would you like to add');
//     list.push(newtodo);
//     console.log(`${newtodo} added to list`);
//   }

//   if (todo === 'delete') {
//     let deletetodo = prompt('what would you like to deletetodo');
//     if (list.indexOf(deletetodo)) {
//       list.splice(list.indexOf(deletetodo), 1);
//       console.log(`${deletetodo} deleted from list`);
//     } else prompt('what would you like to deletetodo');
//   }

//   todo = prompt('what would you like to do');
// }

// // DEFINE YOUR FUNCTION BELOW:
// const returnDay = (num) => {
//   switch (num) {
//     case 1:
//       return 'Monday';
//     case 2:
//       return 'Tuesday';
//     case 3:
//       return 'Wednesday';
//     case 4:
//       return 'Thursday';
//     case 5:
//       return 'Friday';
//     case 6:
//       return 'Saterday';
//     case 7:
//       return 'Sunday';
//   }
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 0];

// function print(element) {
//   console.log(element);
// }

// nums.forEach(print);

// nums.forEach((currentEle) => {
//   console.log(currentEle);
// });

// const dub = nums.map((curr) => {
//   return curr * 2;
// });
// console.log(dub);

// const sum = nums.reduce((accum, curval) => {
//   return accum + curval;
// });
// console.log(sum);
