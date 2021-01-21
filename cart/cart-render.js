import { calcItemTotal } from '../utils.js';

export function renderTableRow(item, shoe) {

    const tr = document.createElement('tr');

    const tdProduct = document.createElement('td');
    tdProduct.textContent = shoe.name;
    tr.append(tdProduct);

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = item.quantity;
    tr.append(tdQuantity);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${calcItemTotal(item, shoe)}`;
    tr.append(tdPrice);

    return tr;
}