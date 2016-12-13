// Promises in JavaScript happens when resolve is passsed

// a function that returns a promise to 'clean the room'
let cleanRoom = function(){
  return new Promise(function(resolve, reject){
      resolve(' Cleaned The Room ');
  });
};

let removeGarbage = function(message){
	return new Promise(function(resolve, reject){
  	resolve(message + 'remove Garbage');
  });
};

let winIceCream = function(message){
	return new Promise(function(resolve, reject){
  	resolve(message + ' won Icecream');
  });
};

//contatinate the promise functions into a messsgae.
cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIceCream(result);
}).then(function(result){
	console.log('finished' + result);
});

//when all functions have ben resolved.
Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
	console.log('all finished');
});

// Eaxample sinario for using .race is when you are pulling form multiple places for redundancy, once the first one is finished you can stop the action.
//when any of the functions have ben resolved.
Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
	console.log('one of them is finished');
});
