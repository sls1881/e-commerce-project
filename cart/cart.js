import { cartItem } from './cart-data.js';
import { shoes } from '../product/data.js';

import { renderTableRow } from './cart-render.js';
import { calcOrderTotal, findById } from '../utils.js';

const tbody = document.querySelector('tbody');

for (let item of cartItem) {
    const shoe = findById(item.id, shoes);

    const dom = renderTableRow(item, shoe);

    tbody.append(dom);
}

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





