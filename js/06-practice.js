const cars = [
    {
      id: 1,
      car: "Audi",
      type: "A6",
      price: 30000,
      mileage:"100000",
      capacity:"3.0",
      fuel: "Бензин",
      img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
    },
    {
      id: 2,
      car: "Honda",
      type: "Civic",
      price: 12000,
      mileage:"120000",
      capacity:"1.5",
      fuel: "Бензин",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    }, 
    {
      id: 3,
      car: "Audi",
      type: "Q7",
      price: 40000,
      mileage:"80000",
      capacity:"4,5",
      fuel: "Бензин",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
      id: 4,
      car: "BMW",
      type: "5 siries",
      price: 15000,
      mileage:"180000",
      capacity:"3,0",
      fuel: "Дизель",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
      id: 5,
      car: "Honda",
      type: "Accord",
      price: 20000,
      mileage:"90000",
      capacity:"2,0",
      fuel: "Бензин",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
      id: 6,
      car: "Volvo",
      type: "XC60",
      price: 25000,
      mileage:"165000",
      capacity:"2,5",
      fuel: "Дизель",
      img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
      id: 7,
      car: "BMW",
      type: "3 siries",
      price: 9000,
      mileage:"144000",
      capacity:"2,0",
      fuel: "Дизель",
      img: "https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_330i-xdrive_fq_oem_1_815.jpg",
    },
    {
      id: 8,
      car: "BMW",
      type: "X5",
      price: 19500,
      mileage:"200000",
      capacity:"4,2",
      fuel: "Бензин",
      img: "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-m60i-102-6602d48787fb7.jpg?crop=0.772xw:0.651xh;0.0897xw,0.171xh&resize=2048:*",
    },
    {
      id: 9,
      car: "Toyota",
      type: "land cruiser 200",
      price: 45800,
      mileage:"134000",
      capacity:"4,4",
      fuel: "Бензин",
      img: "http://elite.cars.ua/img/upload/cache/aoe-1_q-85_h-1200_w-1800_5c729fc952b986_84132507.jpg",
    },
    {
      id: 10,
      car: "Toyota",
      type: "Camry",
      price: 34600,
      mileage:"178000",
      capacity:"3,5",
      fuel: "Бензин",
      img: "https://s.list.am/f/229/72623229.webp",
    },
    {
      id: 11,
      car: "Toyota",
      type: "land cruiser 150",
      price: 39900,
      mileage:"167000",
      capacity:"3,0",
      fuel: "Дизель",
      img: "https://cdn.riastatic.com/photosnewr/auto/photo/toyota-land-cruiser-prado-150__316133316-460x345.webp",
    },
    {
      id: 12,
      car: "Toyota",
      type: "Corolla",
      price: 10000,
      mileage:"90000",
      capacity:"1,6",
      fuel: "Бензин",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29.jpg/1599px-2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29.jpg",
    },
    {
      id: 13,
      car: "Honda",
      type: "CRV",
      price: 35000,
      mileage:"230000",
      capacity:"2,4",
      fuel: "Дизель",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/2018_Honda_CR-V_%28RW_MY18%29_%2BSport_2WD_wagon_%282018-10-22%29_01.jpg",
    },
    {
      id: 14,
      car: "Volvo",
      type: "XC90",
      price: 30000,
      mileage:"222000",
      capacity:"3,0",
      fuel: "Дизель",
      img: "https://hips.hearstapps.com/hmg-prod/images/2024-volvo-xc90-101-649311ffdc60b.jpg?crop=0.536xw:0.401xh;0.292xw,0.382xh&resize=2048:*",
    },
    {
      id: 15,
      car: "Volvo",
      type: "V40",
      price: 25000,
      mileage:"123000",
      capacity:"2,0",
      fuel: "Бензин",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Volvo_V40_D3_Summum_Designpaket_%28II%29_%E2%80%93_Frontansicht%2C_17._September_2012%2C_D%C3%BCsseldorf.jpg/2880px-Volvo_V40_D3_Summum_Designpaket_%28II%29_%E2%80%93_Frontansicht%2C_17._September_2012%2C_D%C3%BCsseldorf.jpg",
    },
    {
      id: 16,
      car: "Volkswagen",
      type: "Tiguan",
      price: 18000,
      mileage:"145600",
      capacity:"2,0",
      fuel: "Дизель",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/VW_Tiguan_2.0_TDI_front_20100801.jpg/1600px-VW_Tiguan_2.0_TDI_front_20100801.jpg",
    },
    {
      id: 17,
      car: "Volkswagen",
      type: "Passat",
      price: 16500,
      mileage:"234800",
      capacity:"2,0",
      fuel: "Дизель",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/VW_Passat_B8_Limousine_2.0_TDI_Highline.JPG",
    },
    {
      id: 18,
      car: "Volkswagen",
      type: "Golf-7",
      price: 14300,
      mileage:"220000",
      capacity:"1,6",
      fuel: "Бензин",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/VW_Golf_1.6_TDI_BlueMotion_Technology_Comfortline_%28VII%29_%E2%80%93_Frontansicht%2C_31._Dezember_2012%2C_D%C3%BCsseldorf.jpg/2880px-VW_Golf_1.6_TDI_BlueMotion_Technology_Comfortline_%28VII%29_%E2%80%93_Frontansicht%2C_31._Dezember_2012%2C_D%C3%BCsseldorf.jpg",
    },
    {
      id: 19,
      car: "Volkswagen",
      type: "Taureg",
      price: 45200,
      mileage:"100000",
      capacity:"3,0",
      fuel: "Дизель",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2018_Volkswagen_Touareg_V6_R-Line_TDi_Automatic_3.0_Front.jpg",
    },
    {
      id: 20,
      car: "Audi",
      type: "RS6",
      price: 38600,
      mileage:"145000",
      capacity:"4,4",
      fuel: "Бензин",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Audi_RS6_Avant_C8_1X7A0305.jpg/2880px-Audi_RS6_Avant_C8_1X7A0305.jpg",
    },
    {
      id: 21,
      car: "Kia",
      type: "K5",
      price: 13500,
      mileage:"248000",
      capacity:"2,0",
      fuel: "Бензин",
      img: "https://vedanta-auto.com.ua/wp-content/cache/thumb/1d/c98fa172202c81d_0x800.jpg",
    },
    {
      id: 22,
      car: "Kia",
      type: "Sorento",
      price: 14800,
      mileage:"199500",
      capacity:"1,4",
      fuel: "Бензин",
      img: "https://i.infocar.ua/i/12/1902/1400x700.jpg",
    },
    {
      id: 23,
      car: "Kia",
      type: "Sportage",
      price: 14800,
      mileage:"89670",
      capacity:"2,5",
      fuel: "Бензин",
      img: "https://www.aelita.ua/wp-content/uploads/2021/07/20210707_120935-scaled-1140x843.jpg",
    },
    {
      id: 24,
      car: "Volkswagen",
      type: "ID4",
      price: 38000,
      mileage:"45000",
      capacity:"77 кВт",
      fuel: "Електрика",
      img: "https://electro-motors.top/image/cache/catalog/electrocars/id4/vw-id4-pure-7-1200x800.jpg",
    },
    {
      id: 25,
      car: "Nissan",
      type: "Leaf",
      price: 27000,
      mileage:"124000",
      capacity:"55 кВт",
      fuel: "Електрика",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2018_Nissan_Leaf_Tekna_Front.jpg/2880px-2018_Nissan_Leaf_Tekna_Front.jpg",
    },
    {
      id: 26,
      car: "Tesla",
      type: "Model 3",
      price: 27000,
      mileage:"45000",
      capacity:"77 кВт",
      fuel: "Електрика",
      mileage:"45000",
      capacity:"77 кВт",
      fuel: "Електрика",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/2880px-2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    }, 
    {
      id: 27,
      car: "Tesla",
      type: "Model X",
      price: 32000,
      mileage:"129000",
      capacity:"100 кВт",
      fuel: "Електрика",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tesla_Model_X_100D_1X7A6736.jpg/2880px-Tesla_Model_X_100D_1X7A6736.jpg",
    }, 
    {
      id: 28,
      car: "Tesla",
      type: "Model Y",
      price: 39400,
      mileage:"34900",
      capacity:"77 кВт",
      fuel: "Електрика",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tesla_Model_Y_1X7A6211.jpg/2880px-Tesla_Model_Y_1X7A6211.jpg",
    }, 
    {
      id: 29,
      car: "Renault",
      type: "Zoe",
      price: 17200,
      mileage:"80900",
      capacity:"65 кВт",
      fuel: "Електрика",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/2018_Renault_ZOE.jpg",
    }, 
];
  
const form = document.querySelector(".js-form");
const container = document.querySelector(".js-list");

form.addEventListener("submit", handleSearch);

function createMarkup(arr) {
  return arr.map(item => `
    <li class="car-card" data-id="${item.id}">
      <img src="${item.img}" alt="${item.type}" class="car-image">
      <h2 class="car-title">${item.car}</h2>
      <h3 class="car-type">${item.type}</h3>
      <h3 class="car-mileage">${item.mileage}км</h3>
      <h3 class="car-capacity"> Об'єм двигуна:${item.capacity}</h3>
      <h3 class="car-fuel">Тип палива:${item.fuel}</h3>
      <span class="car-price">${item.price}$</span>
    </li>
  `).join("");
}


container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "25px";
container.insertAdjacentHTML("beforeend", createMarkup(cars));

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

