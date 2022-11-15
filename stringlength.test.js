const stringLength = require('./string');
describe('stringLength', ()=>{
  test('check for stringLength exception', ()=> {
    const string= "Riyana, is my name!";
      expect(()=>stringLength(string)).toThrow();
      expect(()=>stringLength(string)).toThrow(Error);
  });

  test('give a string value: "Riyana" and check what it is length', () => {
  // Arrange
    const string= "Riyana";

    // Act
    const result = stringLength(string);

    // Assert
  expect(result).toBe(6);
  });

})

