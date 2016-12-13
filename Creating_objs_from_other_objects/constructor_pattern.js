
var PeopleConstructor = function(name, age, state){

  // name is a property of PeopleConstructor function
  this.name = name;
  this.age = age;
  this.state = state;
};

  PeopleConstructor.prototype.printPerson = function(){
  	console.log(this.name + ", " + this.age + ", "+ this.state);
  };

// keyword new creates a new object from constructor
var person1 = new PeopleConstructor("Ken", 44, "California");
var person2 = new PeopleConstructor("Kim", 27, "South Carolina");

person1.printPerson();
person2.printPerson();
