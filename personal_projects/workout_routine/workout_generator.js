/* This should conduct the following:
- create a random new workout per day
- hit specific muscles on specific day
- hit the opposite muscles on the following day
- include cardio sometime during the week

*/


let armPulling =['DB Hammer Curl','Single KB Curl','DB Concentration Curl'];
let armPushing =['DB Triceps Extension','KB Overhead Press','KB Kickback' ];
let legsMain =['Goblet Squat', 'DB Lunges', 'KB Swings'];
let legsAux =['Romanian DL', 'Weighted Calf Raise', 'Hip Thrusts'];
let coreFocus = ['Leg Raise', 'Ankle Swings', 'Crunches'];
let backAndTraps = ['DB Bent Rows', 'Pull Ups', 'Shrugs'];
let chestAndShoulder = ['DB Bench Press', 'DB Close Grip Press', 'KB Squeeze Press'];
let cardioDay = ['Sprints', '60/120', 'Endurance Run'];

let pushingDay = [armPushing[Math.floor(Math.random() * 4)], legsMain[Math.floor(Math.random() * 4)], chestAndShoulder[Math.floor(Math.random() * 4)]];
let pullingDay = [armPulling[Math.floor(Math.random() * 4)], legsAux[Math.floor(Math.random() * 4)], backAndTraps[Math.floor(Math.random() * 4)]];
let runDay = [coreFocus[Math.floor(Math.random() * 4)], cardioDay[Math.floor(Math.random() * 4)]];
function dailyWorkout (day){

}