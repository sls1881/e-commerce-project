// import { cartItem } from './cart-data.js';
import { shoes } from '../product/data.js';

import { renderTableRow } from './cart-render.js';
import { calcOrderTotal, findById } from '../utils.js';
import { getCart, clearCart } from './cart-utils.js';

const tbody = document.querySelector('tbody');

const dynamicCart = getCart();

const orderButton = document.querySelector('button');
//6: Loop through the data and append it to the DOM using the renderTableRow function
for (let item of dynamicCart) {
    const shoe = findById(item.id, shoes);

    const dom = renderTableRow(item, shoe);

    tbody.append(dom);
}

//8: Store the calcOrderTotal function, create a table row with two empty cells and one order total cell, add text content with stored function to return order total, append to the tbody to display the cart total in the appropriate cell of the cart
const total = calcOrderTotal(dynamicCart, shoes);

const tr = document.createElement('tr');

const tdEmpty1 = document.createElement('td');
tr.append(tdEmpty1);

const tdEmpty2 = document.createElement('td');
tr.append(tdEmpty2);

const tdTotal = document.createElement('td');
tdTotal.textContent = `Cart total: $${total}`;
tr.append(tdTotal);


if (dynamicCart.length === 0) {
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        clearCart();
        alert(JSON.stringify(dynamicCart, true, 2));
        location.href = './cart.html';
    });

}

tbody.append(tr);