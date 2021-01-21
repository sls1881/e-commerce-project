// import { cartItem } from './cart/cart-data.js';
// import { shoes } from './product/data.js';

//3: Uses ID from the cart to find a matching ID in shoes array, return (shoe object)
export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

//4: Declaring cart quantity *  shoe price
export function calcItemTotal(item, shoe) {

    return item.quantity * shoe.price;
}

//7: Looping through the cart/shoe data using the calcItemTotal function to return item totals and then using the calcOrderTotal to return the cart total
let total = 0;

export function calcOrderTotal(cartItem, shoes) {

    for (let item of cartItem) {
        const shoe = findById(item.id, shoes);
        const totalByItem = calcItemTotal(item, shoe);

        total = total + totalByItem;

    }
    return total;
}


