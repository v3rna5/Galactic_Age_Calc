import { AgeCalc } from './../src/calculator.js';

describe('AgeCalcTests', function() {

  it('should convert age to seconds', function() {
    let ageCalc = new AgeCalc();
    expect(ageCalc.ageInSeconds(1)).toEqual(31536000);
  });
  it('should convert age to Mercury years', function() {
  let ageCalc = new AgeCalc();
  expect(ageCalc.ageOnMerc(21)).toEqual(87);
});
it('should convert age to Venus years', function() {
  let ageCalc  = new AgeCalc();
  expect(ageCalc.ageOnVenus(21)).toEqual(33);

});
it('should convert age to Mars years', function() {
  let ageCalc  = new AgeCalc();
  expect(ageCalc.ageOnMars(21)).toEqual(11);
})
});
