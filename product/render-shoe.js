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

    const div = document.createElement('div');
    div.classList.add('input-button');
    li.append(div);

    //Need to add an input drop-down
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    div.append(quantityInput);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        const quantity = quantityInput.valueAsNumber;
        addToCart(shoes.id, quantity);

        quantityInput.value = '';

    });

    button.classList.add('purchase-button');
    button.textContent = 'Add to cart 🛒';
    div.append(button);


    return li;
} 