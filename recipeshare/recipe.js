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
    }
]

function showRecipes(){
	const recipeContainer = document.querySelector('.recipe-content');
	articles.forEach((recipe) => {
		const recipeElement = document.createElement("recipe");

		const recipeHTML = `
        <div class="recipe-content">
            <h1>${recipes.name}</h1>
            <img src="${recipes.image}" alt="${recipes.alt}">
            <h2>${recipes.ingredientTitle}</h2>
            <ul class="ingredients">
                <li>1 ½ cups all-purpose flour</li>
                <li>3 ½ teaspoons baking powder</li>
                <li>1 tablespoon white sugar</li>
                <li>¼ teaspoon salt, or more to taste</li>
                <li>1 ¼ cups milk</li>
                <li>3 tablespoons butter, melted</li>
                <li>1 large egg</li>
            </ul>
            <h2>${recipes.directionsTitle}</h2>
            <ul class="directions">
                <ol>Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.</ol>
                <ol>Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.</ol>   
            </ul>
        </div>

		`
recipeElement.innerHTML = recipeHTML;
recipeContainer.appendChild(recipeElement);



	})

}