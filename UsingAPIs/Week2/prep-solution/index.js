const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }
  return response.json();
}

function renderResults(pokemons) {
  document.querySelector('#error').textContent = '';
  const jsonString = JSON.stringify(pokemons, null, 2);
  document.querySelector('#json').textContent = jsonString;
}

function renderError(err) {
  document.querySelector('#json').textContent = '';
  document.querySelector('#error').textContent = err.message;
}

function main() {
  const button = document.querySelector('#button');
  button.addEventListener('click', async () => {
    try {
      const option = document.querySelector('#option');
      const url = option.checked ? INVALID_URL : VALID_URL;
      const pokemons = await fetchJSON(url);
      renderResults(pokemons);
    } catch (err) {
      renderError(err);
    }
  });
}

window.addEventListener('load', main);
