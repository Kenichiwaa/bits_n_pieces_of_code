// create factory function
var peopleFactory = function(name, age, state){

  // new object
  var temp = {};

  // attach propterties as parameters
  temp.name = name;
  temp.age = age;
  temp.state = state;

  // function
	temp.printPerson = function(){
  	console.log(this.name + ", " + this.age + ", " + this.state);
  };

  //return function
  return temp;

}
