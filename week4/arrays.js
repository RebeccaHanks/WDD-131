//  arrays.js

// map example
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("")// set the innerHTML

const grades = ['A', 'B', 'C'];
function gradePoints(grades) {
    grades = grades.toUpperCase()
    let points = 0;
    if (grades === 'A') {
      points = 4;
    }
    if (grades === 'B') {
      points = 3;
    }
    else if (grades === 'C') {
      points = 2;
    }
    return points;
}

// map and sum
const  gpaPoints = grades.map(gradePoints)
console.log(gradePoints);

function sum(total, current) {
  return total + current;
}

// reduce example
const gpaTotal = gpaPoints.reduce(sum, 0) // reduce
console.log(gpaTotal);

// filter example
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']; // filter
const shortFruits = fruits.filter(function(item) {
  return item.length < 6;
})

console.log(shortFruits)