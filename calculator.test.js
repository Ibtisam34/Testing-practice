const calculator=require('./calculator');
describe('new calculator add method', ()=>{
  test('adds 1 + 5  to equal 6', ()=>{
    //Arrange
    const calculate= new calculator(1,5);

    //Act
    const result = calculate.add(1, 5);

    //Assert
    expect(result).toBe(6);
  });

  test('adds 1.5 + 4.5  to equal 6', ()=>{
    //Arrange
    const calculate= new calculator(1.5,4.5);

    //Act
    const result = calculate.add();

    //Assert
    expect(result).toBeCloseTo(6);
  });

  test('adds -1 + 2  to equal 1', ()=>{
    //Arrange
    const calculate= new calculator(-1,2);

    //Act
    const result = calculate.add();

    //Assert
    expect(result).toBe(1);
  });
  
});


describe('new calculator substract method', ()=>{
  test('substracts 3 - 1  to equal 2', ()=>{
    //Arrange
    const calculate= new calculator(3,1);

    //Act
    const result = calculate.substract();

    //Assert
    expect(result).toBe(2);
  });

  test('substracts 1 - 2  to equal -1', ()=>{
    //Arrange
    const calculate= new calculator(1,2);

    //Act
    const result = calculate.substract();

    //Assert
    expect(result).toBe(-1);
  });

  test('substracts 4.5 - 1  to equal 3.5', ()=>{
    //Arrange
    const calculate= new calculator(4.5,1);

    //Act
    const result = calculate.substract();

    //Assert
    expect(result).toBeCloseTo(3.5);
  });

});

describe('new calculator divide method', ()=>{
  test('divids 3/ 2  to equal 1.5', ()=>{
    //Arrange
    const calculate= new calculator(3,2);

    //Act
    const result = calculate.divide();

    //Assert
    expect(result).toBeCloseTo(1.5);
  });

  test('divids 0 / 1  to equal 0', ()=>{
    //Arrange
    const calculate= new calculator(0);

    //Act
    const result = calculate.divide();

    //Assert
    expect(result).toBe(0);
  });

  test('divids -1 / -4  to equal 0.25', ()=>{
    //Arrange
    const calculate= new calculator(-1,-4);

    //Act
    const result = calculate.divide();

    //Assert
    expect(result).toBeCloseTo(0.25);
  });

});

describe('new calculator multiply method', ()=>{
  test('multiplies 4 * 2  to equal 8', ()=>{
    //Arrange
    const calculate= new calculator(4,2);

    //Act
    const result = calculate.multiply();

    //Assert
    expect(result).toBe(8);
  });


  test('multiplies -2 * 2  to equal -4', ()=>{
    //Arrange
    const calculate= new calculator(-2,2);

    //Act
    const result = calculate.multiply();

    //Assert
    expect(result).toBe(-4);
  });

  test('multiplies -6 * -2  to equal 12', ()=>{
    //Arrange
    const calculate= new calculator(-6,-2);

    //Act
    const result = calculate.multiply();

    //Assert
    expect(result).toBe(12);
  });
});