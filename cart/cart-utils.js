import { findById } from '../utils.js';

//Store global variables
const CART = 'CART';
const emptyCart = [];

//Assuming there is a cart in local storage and we're getting the 'stringified' cart
export function getCart() {
    //Get the cart from local storage
    const cartString = localStorage.getItem(CART);

    //If there is a cart in local storage..
    if (cartString) {
        //Turn back into an array, parsed
        const cartParsed = JSON.parse(cartString);

        //Return cart array
        return cartParsed;

        //Runs if nothing has been set to local storage
        //If there is not a cart in localStorage...
    } else {

        //Turn empty cart into an array, parsed
        const emptyCartString = JSON.stringify(emptyCart);

        //Save to local storage
        localStorage.setItem(CART, emptyCartString);

        //Return an empty array
        return emptyCart;
    }
}

//Check if the cart already has the line item (findById)
export function addToCart(id) {

    //Get cart from local storage
    const pullCart = getCart();
    console.log(pullCart);

    //Use findByID to check if ID is already in the cart
    const cartItem = findById(id, pullCart);

    //If the item is in the cart, increment the quantity
    if (cartItem) {
        cartItem.quantity++;

        //If the item is NOT in the cart create a new line
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };

        pullCart.push(newItem);
    }

    setCart(pullCart);

}

//Save the modified cart array back to local storage
export function setCart(pullCart) {
    //Serialize with JSON
    const setString = JSON.stringify(pullCart);

    //Save to local storage
    localStorage.setItem(CART, setString);

}

export function clearCart() {
    //Stringify the cleared cart
    const clearCartString = JSON.stringify(emptyCart);

    //Save cleared cart to local storage
    localStorage.setItem(CART, clearCartString);
}