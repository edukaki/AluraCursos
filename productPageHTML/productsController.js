// document.querySelector('[data-product="0"]').remove();
export default function deleteProduct(index) {
	const product = document.querySelector(`[data-product="${index}"]`);
	product.remove();
}
