//Import for product test
import { renderShoe } from '../product/render-shoe.js';

//Import for cart test
import { calcOrderTotal, findById } from '../utils.js';

//Import for calculate total function
import { renderTableRow } from '../cart/cart-render.js';
import { calcItemTotal } from '../utils.js';

//Products test
const test = QUnit.test;

test('It should take in a shoe and return a li', (expect) => {
    //Arrange
    const heels = {
        id: 1,
        name: 'Black Heels',
        description: 'Four inch black high heels with a thin heel.',
        category: 'heels',
        price: 120,
        brand: 'Sam Edelman',
        size: 7.5,
        image: 'heels.png',
    };

    // Set up your arguments and expectations
    const expected = `<li class="shoe-items"><img class="shoes-img" src="../assets/heels.png"><p class="pName">Black Heels</p><p>Four inch black high heels with a thin heel.</p><p>Price: $120</p><p>Size: 7.5</p><p>Brand: Sam Edelman</p><button class="purchase-button" value="1">Add to cart 🛒</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoe(heels);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//cart test
test('findById should take in a 3 from the shoes array and return a sneakers', (expect) => {

    const shoes = [
        {
            id: 1,
            name: 'Black Heels',
            description: 'Four inch black high heels with a thin heel.',
            category: 'heels',
            price: 120,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'heels.png',
        },

        {
            id: 2,
            name: 'Black Boots',
            description: 'Three inch black high heel boots with a medium width heel.',
            category: 'boots',
            price: 150,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'boots.png',
        },

        {
            id: 3,
            name: 'Multi-color Sneakers',
            description: 'Pink, black, red, and blue sneakers with air bubble soles.',
            category: 'sneakers',
            price: 120,
            brand: 'Nike',
            size: 7.5,
            image: 'sneakers.png',
        },

        {
            id: 4,
            name: 'Tan Flats',
            description: 'Tan pointed toe flats.',
            category: 'flats',
            price: 120,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'flats.png',
        },

        {
            id: 5,
            name: 'Black Gladiator Sandals',
            description: 'Black rope sandals that tie up the ankle.',
            category: 'sandals',
            price: 60,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'sandals.png',
        },

        {
            id: 6,
            name: 'Fuzzy Slippers',
            description: 'Soft and fuzzy purple slippers that are perfect for a cold day.',
            category: 'slippers',
            price: 100,
            brand: 'Uggs',
            size: 7.5,
            image: 'slippers.png',
        },
    ];

    const expected = {
        id: 3,
        name: 'Multi-color Sneakers',
        description: 'Pink, black, red, and blue sneakers with air bubble soles.',
        category: 'sneakers',
        price: 120,
        brand: 'Nike',
        size: 7.5,
        image: 'sneakers.png',
    };

    const actual = findById(3, shoes);

    expect.deepEqual(actual, expected);

});

//calculate total test
test('calcItemTotal should take in a quantity of 3 from the flats object it should return $240', (expect) => {

    const item =
    {
        id: 4,
        quantity: 3
    };

    const shoe = {
        id: 4,
        name: 'Tan Flats',
        description: 'Tan pointed toe flats.',
        category: 'flats',
        price: 80,
        brand: 'Sam Edelman',
        size: 7.5,
        image: 'flats.png',
    };

    const expected = 240;

    const actual = calcItemTotal(item, shoe);

    expect.equal(actual, expected);

});

test('It should take in cart items and return table rows', (expect) => {

    const cartItem2 = {
        id: 2,
        quantity: 1
    };

    const shoe2 = {
        id: 2,
        name: 'Black Boots',
        description: 'Three inch black high heel boots with a medium width heel.',
        category: 'boots',
        price: 150,
        brand: 'Sam Edelman',
        size: 7.5,
        image: 'boots.png',
    };

    const expected = `<tr><td>Black Boots</td><td>1</td><td>$150</td></tr>`;

    const actual = renderTableRow(cartItem2, shoe2);

    expect.equal(actual.outerHTML, expected);
});

test('It should return 1210 for all the cart items', (expect) => {

    const cartItems = [
        {
            id: 1,
            quantity: 2
        },
        {
            id: 2,
            quantity: 1,
        },

        {
            id: 3,
            quantity: 2
        },

        {
            id: 4,
            quantity: 3
        },

        {
            id: 5,
            quantity: 4
        },

        {
            id: 6,
            quantity: 1
        },
    ];

    const shoes = [
        {
            id: 1,
            name: 'Black Heels',
            description: 'Four inch black high heels with a thin heel.',
            category: 'heels',
            price: 120,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'heels.png',
        },

        {
            id: 2,
            name: 'Black Boots',
            description: 'Three inch black high heel boots with a medium width heel.',
            category: 'boots',
            price: 150,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'boots.png',
        },

        {
            id: 3,
            name: 'Multi-color Sneakers',
            description: 'Pink, black, red, and blue sneakers with air bubble soles.',
            category: 'sneakers',
            price: 120,
            brand: 'Nike',
            size: 7.5,
            image: 'sneakers.png',
        },

        {
            id: 4,
            name: 'Tan Flats',
            description: 'Tan pointed toe flats.',
            category: 'flats',
            price: 80,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'flats.png',
        },

        {
            id: 5,
            name: 'Black Gladiator Sandals',
            description: 'Black rope sandals that tie up the ankle.',
            category: 'sandals',
            price: 60,
            brand: 'Sam Edelman',
            size: 7.5,
            image: 'sandals.png',
        },

        {
            id: 6,
            name: 'Fuzzy Slippers',
            description: 'Soft and fuzzy purple slippers that are perfect for a cold day.',
            category: 'slippers',
            price: 100,
            brand: 'Uggs',
            size: 7.5,
            image: 'slippers.png',
        },
    ];

    const expected = 1210;

    const actual = calcOrderTotal(cartItems, shoes);

    expect.deepEqual(actual, expected);
});

test('It should return a cart when adding to the cart');

