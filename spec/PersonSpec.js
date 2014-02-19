describe('Person', function(){
  var person_1, person_2;

  beforeEach(function() {
    person_1 = new Person('Laure', 'Fischer');
    person_2 = new Person('Anna', 'Tsykalova', {age: 28, friends: [person_1], weight: 155, height: 68});
    person_3 = new Person('Joe', 'Smith', {age: 40, weight: 170, height: 75});
  })

  it("should have a first name", function() {
    expect(person_1.firstName).toEqual('Laure');
  });

  it("should have a last name", function() {
    expect(person_1.lastName).toEqual('Fischer');
  });

  it("can optionally have an age, weight, height, and friends", function() {
    expect(person_2.age).toEqual(28);
    expect(person_2.weight).toEqual(155);
    expect(person_2.height).toEqual(68);
    expect(person_2.friends).toEqual([person_1]);
  });

  it("should be possible to return a person's first and last name", function() {
    expect(person_1.fullName()).toEqual("Laure Fischer");
    expect(person_2.fullName()).toEqual("Anna Tsykalova");
  });

  it("should be possible to return a person's weight in stone", function() {
    expect(person_2.weightInStone()).toEqual(11);
  });

  it("should be possible to add a person to a person's friends", function() {
    person_2.addFriend(person_3);
    expect(person_2.friends).toEqual([person_1, person_3]);
  });

  it("should be possible to remove a person from a person's friends", function() {
    person_2.removeFriend(person_1);
    expect(person_2.friends).toEqual([]);
  });

  it("should be possible to greet people with nothing provided", function() {
    expect(person_2.greetPeople()).toEqual("Hi Laure Fischer");
  });













});
