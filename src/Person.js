var Person = function(first, last, options) {
  options = options || {};
  this.firstName = first;
  this.lastName = last;
  this.age = options.age;
  this.weight = options.weight;
  this.height = options.height;
  this.friends = options.friends;
  // this.fullName = this.firstName + " " + this.lastName;
};

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.weightInStone = function() {
  return parseInt(this.weight / 14);
};


