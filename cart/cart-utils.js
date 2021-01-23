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

        //Stringify the empty cart into a string
        const emptyCartString = JSON.stringify(emptyCart);

        //Save to local storage
        localStorage.setItem(CART, emptyCartString);

        //Return an empty array
        return emptyCart;
    }
}

//Check if the cart already has the line item (findById)
export function addToCart(id, input) {

    //Get cart from local storage
    const cart = getCart();

    //Use findByID to check if ID is already in the cart
    const cartItem = findById(id, cart);

    //If the item is in the cart, increment the quantity
    if (cartItem) {
        cartItem.quantity += input;
        //This needs to increase by quantity not incrementing 

        //If the item is NOT in the cart create a new line
    } else {
        const newItem = {
            id: id,
            quantity: input
        };

        cart.push(newItem);
    }

    setCart(cart);

}

//Save the modified cart array back to local storage
export function setCart(cart) {
    //Serialize with JSON
    const setString = JSON.stringify(cart);

    //Save to local storage
    localStorage.setItem(CART, setString);

}

export function clearCart() {
    //Stringify the cart
    const clearCartString = JSON.stringify(emptyCart);

    //Save cart to local storage
    localStorage.setItem(CART, clearCartString);
}