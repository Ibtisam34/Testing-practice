const reverseString= require('./reverse');
describe('reverseString', ()=>{
  test(' when I have my name as"Riyana" it should return "anayiR" ',()=>{
     //Arrange
     const string="Riyana";

     //Act
     const result = reverseString(string);

     //Assert
     expect(result).toBe("anayiR");
  });

  test('when we have a string "Greetings from Earth" it should return "htraE morf sgniteerG" ',()=>{
    //Arrange
     const string="Greetings from Earth";

     //Act
     const result = reverseString(string);

     //Assert
     expect(result).toBe("htraE morf sgniteerG");
  
  });
})