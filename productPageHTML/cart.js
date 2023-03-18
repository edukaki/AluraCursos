import { arrProduct } from "./arrProduct.js";

const createButton = (product) => {
	const button = document.createElement("button");
	button.classList.add(`cart__item__product__button`);
	button.textContent = "add product";
	button.addEventListener("click", (event) => {
		event.preventDefault();
		console.log(product);
	});
	return button;
};

const cartItem = document.querySelector(".cart__item");
const getProduct = (product) => {
	return console.log(product);
};
const cartItemHTML = arrProduct.map((product, index) => {
	const sectionProduct = document.createElement("section");
	sectionProduct.classList.add("cart__item__product");
	sectionProduct.setAttribute("data-product", index);
	sectionProduct.innerHTML = `
        <img class="cart__item__product__image" src="${product.image}" alt="">
        <span class="cart__item__product__name">${product.name}</span>
		</div>
		</div>
		`;
	sectionProduct.appendChild(createButton(product));

	return sectionProduct;
});

cartItem.append(...cartItemHTML);
