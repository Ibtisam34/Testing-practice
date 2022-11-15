const capitalize= require('./capitalize');

describe('capitalize', ()=>{
  test('should take the string "hello" and return the first letter in capitalized "Hello" ',()=>{
    //Arrange
    const string = 'hello';

    //Act
    const result = capitalize(string);

    //Assert
    expect(result).toBe('Hello');
  
  });
});