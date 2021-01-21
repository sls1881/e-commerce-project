import { cartItem } from './cart-data.js';
import { shoes } from '../product/data.js';

import { renderTableRow } from './cart-render.js';
import { findById } from '../utils.js';

const tbody = document.querySelector('tbody');

for (let item of cartItem) {
    const shoe = findById(item.id, shoes);

    const dom = renderTableRow(item, shoe);

    tbody.append(dom);
}



