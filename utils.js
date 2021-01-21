export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(cartItem, price) {

    const itemTotal = cartItem * price;

    return itemTotal;

}