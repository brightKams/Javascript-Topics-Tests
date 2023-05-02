// || ASSESSMENT

// 1. In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90yrs


// || HINTS

//  Assuming that there are 365 days in a year, 52 weeks in a year, and 12 months in a year.

//  Output should be 

// You hahve X days, Y weeks and Z months left

// || SOLUTIONS



let age =  Math.floor(Math.random() * 50) + 1;
let remainingAge = 90 - age;

function yearsLeft(days, weeks, months) {

        console.log(age);
        let lifetime = ` You have ${calcDays(days)}, ${calcWeeks(weeks)}, and ${calcMonths(months)} left at age ${age}  `;
        lifetime = console.log(lifetime);
}

yearsLeft(365, 52, 12);

function calcDays(days) {
    daysLeft = days * remainingAge;
    return daysLeft ;
}

calcDays(50);
function calcWeeks(weeks) {
    weeksLeft = weeks * remainingAge;
    return weeksLeft ;
}
function calcMonths(months) {
    monthsLeft = months * remainingAge;
    return monthsLeft ;
}

console.log();
console.log();


// || ASSESSMENT 2

// BMI Calculator

// Create a BMI calculator using javaScript functions.
// The Body Mass Index (BMI) is a way of estimating the amount of body fat it's used in medcine to calculate risk of heart disease.
// You can calculate it using the formular below, where weight decided by height squared.
// FORMULA => BMI = weight(kg)/height2(m2)

// SOLUTIONS


function calcBMI(weight, height) {
    let bmi = heightSquare = height * height
    let bmiValue = Math.floor(weight/ heightSquare);
    let result = `${bmiValue}BMI`
    return console.log(result);
}
calcBMI(65, 1.8);