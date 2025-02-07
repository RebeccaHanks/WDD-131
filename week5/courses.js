// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: [
        { 
        sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'},
        { 
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, days: 'TTh', 
        instructor: 'Sis A'}
    ], //setting sections to an array of objects
    enrollStudent: function(sectionNum) {
        console.log(sectionNum)
        console.log(this.sections); // asking to look inside of its own object to find sections
    }

  };

console.log(aCourse.sections[0].sectionNum) //reference item in a list

const section1 = aCourse.sections.find(section => section.sectionNum === 1); //creating a function to find a section number equal to 1

const courseName = document.querySelector("#courseName");
const courseCode = document.querySelector("#couseCode");

function setHeader(course) {
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
   // document.querySelector("courseName").innerHTML = course.name;
   // document.querySelector("courseCode").innerHTML = course.code;

}

function tableSections(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>
    `
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

setHeader(aCourse);
renderSections(aCourse.sections);


document.querySelector("#enrollStudent").addEventListener("click", function() {
    aCourse.enrollStudent(1);
})

// map transforms lists from list of objects into list of html strings




 // const currentField = "courseCode"
 //console.log(aCourse.code) //referencing the object and then the part of it with the dot separating
 // console.log(aCourse[currentField]) 


