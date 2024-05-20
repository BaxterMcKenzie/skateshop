// MAPBOX TOKEN
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

const products = [
  {
      brand: 'Darkstar',
      price: '$49.99',
      name: 'Collapse Pink Deck',
      width: '8.0 x 31.62',
      image1: './img/collapsepinkdeck.webp',
      image2: './img/collapsepinkback.webp',
      image3: './img/collapsepinkside.webp',
  },
  {
    brand: 'Darkstar',
    price: '$49.99',
    name: 'Collapse Pink Deck',
    width: '8.0 x 31.62',
    image: './img/collapsepinkdeck.webp',
},
{
  brand: 'Darkstar',
  price: '$49.99',
  name: 'Collapse Pink Deck',
  width: '8.0 x 31.62',
  image: './img/collapsepinkdeck.webp',
},

]

// -------- HTML ELEMENTS & SETTING AS GLOBAL SCOPED --------

// Get the results div:
const results = document.getElementById('results');
// Get the sort button:
const sortByNameButton = document.getElementById('nameButton');

// -------- POPULATE CARDS & Initial Population --------

// Populate cards - no sorting just populatin
function populateCards(array) {
    // clear out any results first:
    results.innerHTML = '';
    // Loop over the students and create a crad for each student - for loop
    for (let i = 0; i < array.length; i++) {
        // then populate:
        results.innerHTML += `
            <div class="card">
            <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${products[i].image1}" alt="${''} image 1"></div>
                  <div class="swiper-slide"><img src="${products[i].image2}" alt="${''} image 2"></div>
                  <div class="swiper-slide"><img src="${products[i].image3}" alt="${''} image 3"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
                <div class="card-details">
                    <h3>${array[i].brand}</h3>
                    <h4>${array[i].name}</h4>
                    <h5> Price: ${array[i].price}</h5>
                    <h5> Width: ${array[i].width}</h5>
                </div>
            </div>
        `
    }
}

populateCards(products);

// INTITAILSE MAPBOX

// Initialise the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [174.7762, -41.2865],
  zoom: 13
});

/** SWIPER JS */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });