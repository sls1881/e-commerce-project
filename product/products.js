// import functions and grab DOM elements
// import functions and grab DOM elements
import { shoes } from './data.js';
import { renderShoe } from './render-shoe.js';
// initialize state

const list = document.getElementById('list');

for (let shoe of shoes) {
    const shoeElement = renderShoe(shoe);

    list.append(shoeElement);
}

// set event listeners to update state and DOM