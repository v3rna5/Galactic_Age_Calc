import { Calculator } from './../src/calculator.js';

describe('CalculatorTests', function() {

  it('should convert age to seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(1)).toEqual(31536000);
  });
  it('should convert age to Mercury years', function() {
  let calculator = new Calculator();
  expect(calculator.ageOnMerc(21)).toEqual(87);
});
it ('should covert age to Venus years', function() {
  let calculator = new Calculator();
  expect(calculator.ageOnVenus(21)).toEqual(33);

});
it('should convert age to Mars age years', function() {
    let calculator  = new Calculator();
    expect(calculator.ageInMars(21)).toEqual(11);
  });
  // it('should convert age to Juniper age years'), function() {
  //   let calculator = new Calculator();
  //   expect(calculator.ageInJuniper(21)).toFixed(1.75);
  // });
  it('over Hundred'), function () {
    let calculator = new Calculator();
    expect(calculator.overHundred(101)).toEqual(true);
  }
});
