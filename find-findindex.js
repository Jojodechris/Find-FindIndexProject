/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find((user) => user.username === username);
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
    const index = usersArray.findIndex(user => user.username === username);
    if (index !== -1) {
      return usersArray.splice(index, 1)[0];
    }
    
    return undefined;
  }


//   Explanation:

// The findIndex method is used to find the index of the object whose username matches the specified username. 
// If no matching object is found, it returns -1.
// If a matching object is found (i.e., index is not -1),
//  the splice method is used to remove one element at the found index from the users array. 
//  The removed object is returned using [0].
// If no matching object is found, undefined is returned