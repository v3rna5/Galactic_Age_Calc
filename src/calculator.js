let moment = require('moment');

export class AgeCalc {

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
ageOnMars(age) {
  let marsAge = (Math.floor(age/1.88));
  return marsAge;
}
}
