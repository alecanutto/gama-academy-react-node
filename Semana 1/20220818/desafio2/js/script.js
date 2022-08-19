const URL_BASE = 'https://viacep.com.br/ws';

window.addEventListener('load', init);

function init() {
  const searchInput = document.querySelector('#cep');
  const searchBtn = document.querySelector('#searchBtn');
  const cleanBtn = document.querySelector('#cleanBtn');

  searchBtn.addEventListener('click', async evt => {
    evt.preventDefault();
    const result = await fetchCep(searchInput.value);
    if (result) populateData(result);
  });

  cleanBtn.addEventListener('click', evt => {
    evt.preventDefault();
    document.querySelector('#enderecos-tbody').innerHTML = '';
  });
}

async function fetchCep(cep) {
  try {
    const data = await fetch(`${URL_BASE}/${cep}/json`);
    return data.json();
  } catch (error) {
    console.log(error.message);
  }
}

function populateData(data) {
  const { cep, logradouro, bairro, localidade, uf } = data;
  const content = `<tr>
    <td>${cep}</td>
    <td>${logradouro}</td>
    <td>${bairro}</td>
    <td>${localidade}/${uf}</td>
    `;
  document.querySelector('#enderecos-tbody').innerHTML += content;
}
