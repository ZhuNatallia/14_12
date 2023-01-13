/* First level: Написать страницу, в которой реализована форма с одним полем ввода (id). При отправке формы должен происходить асинхронный запрос на сервер. На основе полученных данных необходимо отобразить информацию о товаре. 
ссылка для запросов https://fakestoreapi.com/products/1 (последний параметр - id продукта).
Дизайн на ваше усмотрение, но он должен быть. */

const root_elem = document.querySelector('#root');
const form_elem = document.querySelector('.form');

function createPost(title, price, description, category, image, rate, count) {
	const card_container = document.createElement('div');
	const p_title = document.createElement('p');
	const p_price = document.createElement('p');
	const p_description = document.createElement('p');
	const p_category = document.createElement('p');
	const img = document.createElement('img');
	const p_rating = document.createElement('p');
	const p_rate = document.createElement('p');
	const p_count = document.createElement('p');

	p_title.innerText = title;
	p_price.innerText = price;
	p_description.innerText = description;
	p_category.innerText = category;
	img.setAttribute('src', image);
	/* p_rate.innerText = rate;
	p_count.innerText = count; */
	p_rating.innerText = `${rate}, ${count}`;

	card_container.append(
		p_title,
		p_price,
		p_description,
		p_category,
		img,
		p_rating,
		p_rate,
		p_count
	);
	root_elem.append(card_container);

	card_container.classList.add('card_container');
}

form_elem.addEventListener('submit', (e) => {
	e.preventDefault();
	const id = e.target.id.value;
	fetch(`https://fakestoreapi.com/products/${id}`)
		.then((resp) => resp.json())
		.then(({ title, price, description, category, image, rating }) =>
			createPost(title, price, description, category, image, rating)
		);

	e.target.id.value = '';
});
