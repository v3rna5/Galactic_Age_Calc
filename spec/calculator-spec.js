import { Calculator } from './../src/calculator.js';

describe('CalculatorTests', function() {
    let calculator = new Calculator();

  it('should convert age to seconds', function() {
    // let calculator = new Calculator();
    expect(calculator.ageInSeconds(1)).toEqual(31536000);
  });
  it('should convert age to Mercury years', function() {
    // let calculator = new Calculator();
    expect(calculator.ageOnMerc(21)).toEqual(87);
  });
  it ('should covert age to Venus years', function() {
    // let calculator = new Calculator();
    expect(calculator.ageOnVenus(21)).toEqual(33);

  });
  it('should convert age to Mars age years', function() {
    // let calculator  = new Calculator();
    expect(calculator.ageInMars(21)).toEqual(11);
  });
  it('should minus bad habit from age', function() {
    // let calculator  = new Calculator();
    expect(calculator.badHabit(21)).toEqual(11);
  });
  // it('should convert age to Juniper age years'), function() {
  //   let calculator = new Calculator();
  //   expect(calculator.ageInJuniper(21)).toEqual(1.75);
  // });


  it('over 100', function() {
    // let calculator  = new Calculator();
    expect(calculator.lifeSpan(101)).toEqual(true);
  });
});
