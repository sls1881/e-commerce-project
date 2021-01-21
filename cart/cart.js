import { cartItem } from './cart-data.js';
import { shoes } from '../product/data.js';

import { renderTableRow } from './cart-render.js';
import { calcOrderTotal, findById } from '../utils.js';

const tbody = document.querySelector('tbody');

//6: Loop through the data and append it to the DOM using the renderTableRow function
for (let item of cartItem) {
    const shoe = findById(item.id, shoes);

    const dom = renderTableRow(item, shoe);

    tbody.append(dom);
}

//8: Store the calcOrderTotal function, create a table row with two empty cells and one order total cell (3), add text content with stored function to return order total, append to the tbody to display the cart total in the appropriate cell of the cart
const total = calcOrderTotal(cartItem, shoes);

const tr = document.createElement('tr');

const tdEmpty1 = document.createElement('td');
tr.append(tdEmpty1);

const tdEmpty2 = document.createElement('td');
tr.append(tdEmpty2);

const tdTotal = document.createElement('td');
tdTotal.textContent = `Cart total: $${total}`;
tr.append(tdTotal);

tbody.append(tr);





