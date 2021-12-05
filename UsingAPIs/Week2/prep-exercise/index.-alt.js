'use strict';
/*------------------------------------------------------------------------------
 * In this exercise you will practice fetching data from a web API, using
 * `fetch`, promises, async/await and try/catch.
 *
 * Your solution should both work for the "happy" path (using VALID_URL) as
 * well handle the error in the "unhappy" path (when selecting INVALID_URL).
 *
 * You will need to decide which functions need to be made `async` and where
 * `try/catch` blocks should be added.
 *
 * The HTML file already contains the necessary HTML elements.
 *----------------------------------------------------------------------------*/

const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

function fetchJSON(url) {
  // TODO
  // Fetch the JSON data from the web API that responds to the `url` parameter
  // and return a promise that resolves to a corresponding JavaScript object.
  // Make sure to check for HTTP errors.
}

function renderResults(pokemons) {
  // TODO
  // 1. Clear the text content of the HTML element with id `error`.
  // 2. Set the text content of the HTML element with id `json` to JSON text
  //    from the `pokemons` argument, formatted in a human readable form (i.e.,
  //    with indentation and line breaks).
}

function renderError(err) {
  // TODO
  // 1. Clear the text content of the HTML element with id `json`.
  // 2. Set the text content of the HTML element with id `error` to the
  //    `.message` property of the `err` parameter.
}

function main() {
  // TODO
  // 1. Add a click event handler to the button that is already included in the
  //    HTML file.
  // 2. In the click event handler, get the boolean (`checked`) value of the
  //    checkbox that is already included in the HTML value.
  // 3. Create a variable that will hold a url value. Set this url variable to
  //    `VALID_URL` if the checkbox is unchecked and to `INVALID_URL` if the
  //    if it is checked.
  // 4. Attempt to fetch the data from the resulting url by calling `fetchJSON()`.
  // 5. If successful, render the data by calling function `renderResults()`.
  //    On failure, render the error by calling function `renderError()`.
}

window.addEventListener('load', main);
