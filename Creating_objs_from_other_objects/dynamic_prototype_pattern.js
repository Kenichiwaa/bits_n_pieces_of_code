// empty onbject
var peopleDynamicProto = function(name, age, state){

  // add constructor patter
  this.age = age;
  this.name = name;
  this.state = state;

  // if I can't find this function, create function in the prototype space
  if( typeof this.printPerson !== 'function') {
  	// add prototype method
		peopleDynamicProto.prototype.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
		};
  }

};

// create new peopleProto object
var person1 = new peopleDynamicProto("bob", 23, "california");

// console.log
person1.printPerson();
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));

//console.dir(peopleProto);
