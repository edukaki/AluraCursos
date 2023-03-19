import { arrProduct } from "./arrProduct.js";
import deleteProduct from "./productsController.js";

const createButton = (index) => {
	const button = document.createElement("button");
	button.classList.add(`product__item__button`);
	button.textContent = "add product";
	button.addEventListener("click", (event) => {
		event.preventDefault();
		deleteProduct(index);
	});
	return button;
};

const productItems = document.querySelector(".product__items");

const productItemHTML = arrProduct.map((product, index) => {
	const sectionProduct = document.createElement("section");
	sectionProduct.classList.add("product__item");
	sectionProduct.setAttribute("data-product", index);
	sectionProduct.innerHTML = `
        <img class="product__item__image" src="${product.image}" alt="">
        <span class="product__item__name">${product.name}</span>
		</div>
		</div>
		`;
	sectionProduct.appendChild(createButton(index));

	return sectionProduct;
});

productItems.append(...productItemHTML);
