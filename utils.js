import { cartItem } from './cart/cart-data.js';
import { shoes } from './product/data.js';

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(item, shoe) {

    return item.quantity * shoe.price;
}

export function calcOrderTotal(cartItem, shoes) {
    let total = 0;

    for (let item of cartItem) {


        const totalByItem = calcItemTotal(item, shoe);

        total = total + totalByItem;

        const tr = document.createElement('tr');

        const tdEmpty1 = document.createElement('td');
        tr.append(tdEmpty1);

        const tdEmpty2 = document.createElement('td');
        tr.append(tdEmpty2);

        const tdTotal = document.createElement('td');
        tdTotal.textContent = `Cart total: $${total}`;
        tr.append(tdTotal);
    }

}
