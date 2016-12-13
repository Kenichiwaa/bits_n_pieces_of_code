// empty onbject
var peopleProto = function(){

};

// add prototype properties
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

// add prototype method
peopleProto.prototype.printPerson = function(){
	console.log(this.name + ", " + this.age + ", " + this.city);
};

// create new peopleProto object
var person1 = new peopleProto();
//person1.name = "John";
person1.age = 23;
person1.city = "Los Angeles";

// if name property exists in person1 console log true
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));

// console.log
person1.printPerson();

//console.dir(peopleProto);
