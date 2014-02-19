var Person = function(first, last, options) {
  options = options || {};
  this.firstName = first;
  this.lastName = last;
  this.age = options.age || parseInt(Math.random()*(46-26));
  this.weight = options.weight || parseInt(Math.random()*(101-61));
  this.height = options.height || parseInt(Math.random()*(201-151));
  this.friends = options.friends || [];
  // this.fullName = this.firstName + " " + this.lastName;
};

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.weightInStone = function() {
  return parseInt(this.weight / 14);
};

Person.prototype.addFriend = function(person) {
  this.friends.push(person);
};

Person.prototype.removeFriend = function(person) {
  var index = this.friends.indexOf(person);
  this.friends.splice(index, 1);
};

Person.prototype.greetPeople = function() {
  this.friends.forEach(fullName()) {
    return "Hi " + person.fullName();
  };
}
