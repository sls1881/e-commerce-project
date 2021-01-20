// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderShoe } from '../styles/product-temp/render-shoe.js';

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
    const expected = `<li class="shoe-items"><img src="../assets/heels.png"><p>Name: Black Heels</p><p>Description: Four inch black high heels with a thin heel.</p><p>Price: $120</p><p>Size: 7.5</p><p>Brand: Sam Edelman</p><button class="purchase-button" value="1">Add to cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoe(heels);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
