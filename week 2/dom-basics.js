const newP = document.createElement('p');
newP.textContent = 'Hello, World!';
document.body.append(newP);

console.log('is it working?')

const newImage = document.createElement('img');
newImage.src = 'https://picsum.photos/200';
newImage.alt = 'random image from assignment';
document.body.append(newImage);


const title = 'DOM Basics';
const subtitle = 'Creating elemenets and appending them to the DOM';
const content = 'New Contant';
const newSection = document.createElement('section');
newSection.innerHTML = `
<h2>${title}</h2> 
<h3>${subtitle}</h3>
<p>${content}</p>
<p>New Content</p>` //This does the same thing without needing a const
document.body.append(newSection);

const ingredientTitle = 'Taco Ingredients';
const ingredientData = ['Pinto Beans', 'Corn', 'Spices', 'Tortillas'];
const portionData = ['1 15oz can', '1 15oz can', '1 Tbsp', '8'];

function ingredientTemplate(index) {
    return `<li>${ingredientData[index]}: ${portionData[index]}</li>`
}

const ingredients = document.createElement('ul');
ingredients.classList.add('dark'); // adding dark mode

ingredientData.forEach(function(item, index){
    ingredients.innerHTML += ingredientTemplate(index);
})

document.body.append(ingredients);