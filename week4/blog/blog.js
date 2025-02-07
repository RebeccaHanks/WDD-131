const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****',
		cssInfo: 'info-one',
		cssBook: 'book-1'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐',
		cssInfo: 'info-two',
		cssBook: 'book-2'
		
	}
]


function showArticles(){
	const articlesContainer = document.querySelector('#articles-container');
	articles.forEach((article) => {
		const articleElement = document.createElement("article");

		const articleHTML = `
		<section id="${article.cssInfo}">
            <h2>${article.date}</h2>
            <h3>${article.ages}</h3>
            <h3>${article.genre}</h3>
            <h3>${article.stars}</h3>
        </section>
        <section id="${article.cssBook}}">
            <h1>${article.title}</h1>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
        </section>

		`
articleElement.innerHTML = articleHTML;
articlesContainer.appendChild(articleElement);



	})

}

showArticles()

// use set attribute to add all classes
