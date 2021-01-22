import { addToCart } from '../cart/cart-utils.js';

export function renderShoe(shoes) {
    const li = document.createElement('li');

    li.classList.add('shoe-items');

    const img = document.createElement('img');
    img.classList.add('shoes-img');
    li.append(img);
    img.src = `../assets/${shoes.image}`;

    const pName = document.createElement('p');
    pName.classList.add('pName');
    pName.textContent = shoes.name;
    li.append(pName);

    const pDescription = document.createElement('p');
    pDescription.textContent = shoes.description;
    li.append(pDescription);

    const pPrice = document.createElement('p');
    pPrice.textContent = `Price: $${shoes.price}`;
    li.append(pPrice);

    const pSize = document.createElement('p');
    pSize.textContent = `Size: ${shoes.size}`;
    li.append(pSize);

    const pBrand = document.createElement('p');
    pBrand.textContent = `Brand: ${shoes.brand}`;
    li.append(pBrand);

    const button = document.createElement('button');
    //1: Add event listener to 'Add to cart' buttons
    button.addEventListener('click', () => {
        addToCart(shoes.id);
    });

    button.classList.add('purchase-button');
    button.value = shoes.id;
    button.textContent = 'Add to cart 🛒';
    li.append(button);

    return li;
}