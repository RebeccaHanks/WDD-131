const recipes = [
    {
        name: 'Old Fashion Pancakes',
        image: 'fluffy-pancakes-1664x832-1.jpg',
        alt: 'photo of fluffy pancakes',
        ingredientTitle: 'Ingredients:',
        ingredientList: [
			'1 ½ cups all-purpose flour',
			'3 ½ teaspoons baking powder',
			'1 tablespoon white sugar',
			'¼ teaspoon salt, or more to taste',
			'1 ¼ cups milk',
			'3 tablespoons butter, melted',
			'1 large egg'
		],
        directionsTitle: 'Directions:',
        directions: [
            'Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.',
            'Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.'
        ],
        extraTitle1: 'Can You Save Pancake Batter?',
        extraInfo1: 'Do not let leftover pancake batter go to waste! Store the batter in an airtight container in the fridge for up to two days. If you plan to keep it longer than that, it is best to freeze the batter.',
        extraTitle2: 'Can You Freeze Pancakes?',
        extraInfo2: 'Allow the pancakes to cool completely, then arrange them in a single layer on a baking sheet (make sure the edges are not touching). Flash freeze for a few hours or up to overnight. Reheat in an oven set to 350 degrees F until warmed through.',
    },
    {
        name: 'Mac and Cheese',
        image: 'homemade-mac-and-cheese-recipe-25-2.jpg',
        alt: 'photo of homemade mac and cheese',
        ingredientTitle: 'Ingredients:',
        ingredientList: [
			'1/2 lb uncooked elbow macaroni',
			'3 tablespoons butter',
			'2 Tablespoons all-purpose flour',
			'1/2 teaspoon salt',
			'1/8 teaspoon ground black pepper',
			'1 1/2 cups milk , any kind',
			'3/4 cup half and half',
            '2 1/2 cups shredded cheddar cheese'
		],
        directionsTitle: 'Directions:',
        directions: [
            'Preheat the oven to 325 degrees F and lightly grease an 8 inch square (or similar size) baking dish.',
            'Cook the macaroni to al dente, according to package instructions. Drain and set aside.',
            'Make the sauce: Melt the butter in a medium saucepan over medium heat. Blend in the flour, salt, and pepper. Cook for 2 minutes. Slowly add the milk and half and half, stirring constantly, and cook over medium-low heat for a few minutes until the mixture has thickened like the consistency of gravy, about 5-7 minutes. Remove from heat and stir in 1 cup shredded cheese, stirring just until melted.',
            'Combine: Add the cooked macaroni noodles and toss to coat. Pour half or the pasta mixture into the prepared baking dish. Sprinkle ½ cup cheese over the top. Add remaining pasta and sprinkle with remaining cheese.',
            'Bake for 15-20 minutes or until cheese is melted on top.'
        ],
        extraTitle1: 'What Type of Cheese?',
        extraInfo1: 'This classic mac and cheese recipe is made with cheddar cheese.  I particularly love medium or sharp cheddar cheese but any type will do.  If you want a more luxurious mac and cheese or you’re really trying to impress a crowd, you could use a combination of different cheeses.  Just be sure to select a type of cheese that is good for melting, like white cheddar, smoked gouda, gruyere, brie, goat cheese, mozzarella, or fontina.',
        extraTitle2: 'Freezing and Storing',
        extraInfo2: 'This recipe freezes well.  Just like with my other freezer friendly meals, I love to prepare two and freeze one for another day.  You’ll want to freeze this dish prior to baking it in the oven!  Make sure to let the mac and cheese cool completely then pour it into a freezer friendly dish, cover it well and freeze if for up to 3 months.',

    },
    {
        name: 'Homemade Pasta',
        image: 'homemade-pasta-1200x1200-1.jpg',
        alt: 'photo of homemade pasta',
        ingredientTitle: 'Ingredients:',
        ingredientList: [
			'2 cups all-purpose flour, spooned & leveled',
			'3 large eggs',
			'½ teaspoon sea salt',
			'½ tablespoon extra-virgin olive oil'
		],
        directionsTitle: 'Directions:',
        directions: [
            'Place the flour on a clean work surface and make a nest. Add the eggs, olive oil, and salt to the center and use a fork to gently break up the eggs, keeping the flour walls intact as best as you can. Use your hands to gently bring the flour inward to incorporate. Continue working the dough with your hands to bring it together into a shaggy ball.',
            'Knead the dough for 8 to 10 minutes. At the beginning, the dough should feel pretty dry, but stick with it! It might not feel like it’s going to come together, but after 8-10 minutes of kneading, it should become cohesive and smooth. If the dough still seems too dry, sprinkle your fingers with a tiny bit of water to incorporate. If it is too sticky, dust more flour onto your work surface. Shape the dough into a ball, wrap in plastic wrap, and let rest at room temperature for 30 minutes.',
            'Dust 2 large baking sheets with flour and set aside.',
            'Slice the dough into four pieces. Gently flatten one into an oval disk. Run the dough through the Pasta Roller Attachment or a pasta maker three times on level 1 (the widest setting).'
        ],
        extraTitle1: 'What Flour Should I use?',
        extraInfo1: 'In the past, I thought you needed 00 flour or semolina flour to make great fresh pasta, but this homemade pasta recipe proved me wrong. In it, regular all-purpose flour yields chewy, bouncy noodles every time.',
        extraTitle2: 'Homemade Pasta Serving Suggestions',
        extraInfo2: 'If you have never had fresh pasta before, you’re in for a treat! Its chewy, bouncy texture and rich flavor make it so much better than the dried pasta at the store. In fact, these noodles are so good that we usually serve them really simply.',

    }
]

function showRecipes(){
	const recipeContainer = document.querySelector('.recipe-content');
	recipes.forEach((recipe) => {
		const recipeElement = document.createElement("article");

        const ingredientHTML = recipe.ingredientList.map(ingredient => `<li>${ingredient}</li>`).join('');

        const directionsHTML = recipe.directions.map(step => `<li>${step}</li>`).join('');

		const recipeHTML = `
        <section class="recipe-extra">
            <h3>${recipe.extraTitle1}</h3>
            <p>${recipe.extraInfo1}</p>
        </section>
        <div class="recipe-content">
            <h1>${recipe.name}</h1>
            <img src="${recipe.image}" alt="${recipe.alt}">
            <h2>${recipe.ingredientTitle}</h2>
            <ul class="ingredients">${ingredientHTML}</ul>
            <h2>${recipe.directionsTitle}</h2>
            <ol class="directions">${directionsHTML}</ol>
        </div>
        <section class="recipe-extra-2">
            <h3>${recipe.extraTitle2}</h3>
            <p>${recipe.extraInfo2}</p>
        </section>

		`
recipeElement.innerHTML = recipeHTML;
recipeContainer.appendChild(recipeElement);



	})

}

showRecipes();

