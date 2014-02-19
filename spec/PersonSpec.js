describe('Person', function(){
  var person_1, person_2;

  beforeEach(function() {
    person_1 = new Person('Laure', 'Fischer');
    person_2 = new Person('Anna', 'Tsykalova', {age: 28, friends: ["Laure", "Emilie", "Libby"], weight: 155, height: 68})
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
    expect(person_2.friends).toEqual(["Laure","Emilie","Libby"]);
  });

  it("should be possible to return a person's first and last name", function() {
    expect(person_1.fullName()).toEqual("Laure Fischer");
    expect(person_2.fullName()).toEqual("Anna Tsykalova");
  });

  it("should be possible to return a person's weight in stone", function() {
    expect(person_2.weightInStone()).toEqual(11);
  });

});
