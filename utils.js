// import { cartItem } from './cart/cart-data.js';
// import { shoes } from './product/data.js';

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

let total = 0;

export function calcOrderTotal(cartItem, shoes) {

    for (let item of cartItem) {
        const shoe = findById(item.id, shoes);
        const totalByItem = calcItemTotal(item, shoe);

        total = total + totalByItem;

    }
    return total;
}


