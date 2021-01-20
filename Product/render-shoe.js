

export function renderShoe(shoe) {
    const li = document.createElement('li');

    li.classList.add('shoe-items');

    const img = document.createElement('img');
    li.append(img);
    img.src = `../assets/${shoe.image}`;

    const pName = document.createElement('p');
    pName.textContent = `Name: ${shoe.name}`;
    li.append(pName);

    const pDescription = document.createElement('p');
    pDescription.textContent = `Description: ${shoe.description}`;
    li.append(pDescription);

    const pPrice = document.createElement('p');
    pPrice.textContent = `Price: $${shoe.price}`;
    li.append(pPrice);

    const pSize = document.createElement('p');
    pSize.textContent = `Size: ${shoe.size}`;
    li.append(pSize);

    const pBrand = document.createElement('p');
    pBrand.textContent = `Brand: ${shoe.brand}`;
    li.append(pBrand);

    const button = document.createElement('button');
    button.classList.add('purchase-button');
    button.value = shoe.id;
    button.textContent = 'Add to cart';
    li.append(button);

    return li;
}