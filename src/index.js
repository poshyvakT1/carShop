const cast = [];
var makes = [];
var models = [];
var fuel_types = [];

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://localhost:3000/cars')
  cars = await response.json();
  const form = document.querySelector(".js-form");
  const container = document.querySelector(".js-list");

  form.addEventListener("submit", handleSearch);

  function createMarkup(arr) {
    var array_makes = []
    var array_models = []
    var array_fuel_types = []

    const list = arr.map(item => {
      array_makes.push(item.car);
      array_models.push(item.type);
      array_fuel_types.push(item.fuel);
  
      return `
        <li class="car-card" data-id="${item.id}">
          <img src="${item.img}" alt="${item.type}" class="car-image">
          <h2 class="car-title">${item.car}</h2>
          <h3 class="car-type">${item.type}</h3>
          <h3 class="car-mileage">${item.mileage}км</h3>
          <h3 class="car-capacity"> Об'єм двигуна:${item.capacity}</h3>
          <h3 class="car-fuel">Тип палива:${item.fuel}</h3>
          <span class="car-price">${item.price}$</span>
        </li>
      `;
    }).join("");
    makes = [...new Set(array_makes)];
    models = [...new Set(array_models)];
    fuel_types = [...new Set(array_fuel_types)];

    populateSelect('makes-select', makes);
    populateSelect('models-select', models);
    populateSelect('fuel-types-select', fuel_types);
  
    return list;
  }

  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "25px";
  container.insertAdjacentHTML("beforeend", createMarkup(cars));
})

function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  select.appendChild(new Option("-Вибір-"));

  options.map(option => {
    select.appendChild(new Option(option));
  });
}

function handleSearch(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const query = elements.query.value;
  const option = elements.options.value;

  const result = cars       
    .filter(item => item[option].toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a[option].localeCompare(b[option]))
  
  container.innerHTML = createMarkup(result);
}

async function createCar() {

}
