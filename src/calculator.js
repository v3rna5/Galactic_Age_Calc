let moment = require('moment');

export class Calculator {

ageInSeconds(age) {
  let secondsInYear = (age * 31536000);
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
 overHundred(age) {
   let covertHundred = (age > 100);
   return overHunder;

 }
}
