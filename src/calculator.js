// let moment = require('moment');

export class Calculator {

// twoDates(date1, date2){
//   date1 = ("2018, 25, 05")
//   date2 = ("1993, 01, 01")
//   let twodates = (date1 - date2);
//
// return twodates;
//

ageInSeconds(age) {
  let secondsInYear = (age * 365 * 24 * 60 * 60);
  return secondsInYear;
}
ageOnMerc(age) {
  let mercAge = (Math.floor(age/.24));

  return mercAge;
}
ageOnVenus(age) {
  let venusAge = (Math.floor(age/.62));
  return venusAge;
}
ageInMars(age) {
   let marsAge = (Math.floor(age/1.88));
   return marsAge;
 }
 ageInJuniper(age) {
   let juniperAge = (Math.floor(age/11.86));
   return juniperAge;
 }
 badHabit(age) {
   let habit = (age - 10);
   return habit;
 }
lifeSpan(age) {
  let overAge = (age = 101);
  return true;
}
}
