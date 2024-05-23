$(document).ready(function () {

  // MAPBOX TOKEN
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

  const products = [{
        brand: 'DARKSTAR',
        price: '$49.99',
        name: 'Collapse Pink Deck',
        width: '8.0 x 31.62',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/collapsepinkdeck.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/collapsepinkback.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/collapsepinkside.webp',
          }
        ]
      },
      {
        brand: 'DARKSTAR',
        price: '$32.98',
        name: 'Contra Red Deck',
        width: '8.375 x 32.1',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dscontrab.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dscontraf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dscontras.webp',
          }
        ]
      },
      {
        brand: 'DARKSTAR',
        price: '$29.98',
        name: 'Divide Green Deck',
        width: '7.75 x 31.2',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dsdividef.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dsdivideb.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dsdivides.webp',
          }
        ]
      },
      {
        brand: 'DARKSTAR',
        price: '$36.98',
        name: 'General Red Deck',
        width: '8.0 x 31.6',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dsgeneralb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dsgeneralf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dsgenerals.webp',
          }
        ]
      },
      {
        brand: 'GIRL',
        price: '$44.98',
        name: 'Geering Out To Lunch',
        width: '8.0 x 31.5',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/ggeeringb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/ggeeringf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/ggeerings.webp',
          }
        ]
      },
      {
        brand: 'GIRL',
        price: '$60.00',
        name: 'Pacheco Cut & Paste Deck',
        width: '8.375 x 31.75',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/gpachecob.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/gpachecof.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/gpachecos.webp',
          }
        ]
      },
      {
        brand: 'GIRL',
        price: '$60.00',
        name: 'Kennedy Radio Radio Deck',
        width: '8.5 x 31.75',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/gradiob.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/gradiof.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/gradios.webp',
          }
        ]
      },
      {
        brand: 'GIRL',
        price: '$60.00',
        name: 'Kennedy Davis Redacted Deck',
        width: '8.25 x 31.875',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/gdavisb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/gdavisf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/gdaviss.webp',
          }
        ]
      },
      {
        brand: 'DEATHWISH',
        price: '$78.99',
        name: 'Kirby Deathwitch Trials Deck',
        width: '8.25 x 31.5',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dwkirbyb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dwkirbyf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dwkirbys.webp',
          }
        ]
      },
      {
        brand: 'DEATHWISH',
        price: '$78.99',
        name: 'Yuri Deathwitch Trials Deck',
        width: '8.125 x 31.5',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dwyurib.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dwyurif.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dwyuris.webp',
          }
        ]
      },
      {
        brand: 'DEATHWISH',
        price: '$69.98',
        name: 'Hayes December 94 Deck',
        width: '8.125 x 31.5',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dwhayesb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dwhayesf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dwhayess.webp',
          }
        ]
      },
      {
        brand: 'DEATHWISH',
        price: '$78.99',
        name: 'O\'Dwyer Skull Deck',
        width: '8.475 x 31.875',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/dwskullb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/dwskullf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/dwskulls.webp',
          }
        ]
      },
      {
        brand: 'BAKER',
        price: '$59.98',
        name: 'Beasley Flow State Deck',
        width: '8.0 x 31.5',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/bbeasleyb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/bbeasleyf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/bbeasleys.webp',
          }
        ]
      },
      {
        brand: 'BAKER',
        price: '$78.99',
        name: 'Rowan Emergers Deck',
        width: '8.5 x 32',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/browanb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/browanf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/browans.webp',
          }
        ]
      },
      {
        brand: 'BAKER',
        price: '$76.99',
        name: 'Brand Logo White Mini Deck',
        width: '7.3 x 29.5',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/bakerb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/bakerf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/bakers.webp',
          }
        ]
      },
      {
        brand: 'BAKER',
        price: '$69.98',
        name: 'Brooker Yeller Deck',
        width: '8.25 x 31.875',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/bbrookerb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/bbrookerf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/bbrookers.webp',
          }
        ]
      },
      {
        brand: 'SANTA CRUZ',
        price: '$49.98',
        name: 'Flame Dot Deck',
        width: '8.0 x 31.6',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/scflameb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/scflamef.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/scflames.webp',
          }
        ]
      },
      {
        brand: 'SANTA CRUZ',
        price: '$51.95',
        name: 'Winkowski Volcano Deck',
        width: '10.34 x 30.54',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/scvolcanob.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/scvolcanof.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/scvolcanos.webp',
          }
        ]
      },
      {
        brand: 'SANTA CRUZ',
        price: '$78.98',
        name: 'Meek OG Slasher Deck',
        width: '10.1 x 31.13',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/scmeekb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/scmeekf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/scmeeks.webp',
          }
        ]
      },
      {
        brand: 'SANTA CRUZ',
        price: '$69.98',
        name: 'Sommer Tattooed VX ES Deck',
        width: '8.25 x 31.8',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/scsommerb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/scsommerf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/scsommers.webp',
          }
        ]
      },
      {
        brand: 'POWELL PERALTA',
        price: '$109.95',
        name: 'Andy Anderson Flight 290 Deck',
        width: '9.13 x 32.8',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/pandyb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/pandyf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/pandys.webp',
          }
        ]
      },
      {
        brand: 'POWELL PERALTA',
        price: '$84.95',
        name: 'Mike Vallely Elephant 09 Camo Deck',
        width: '10"',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/pmikeb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/pmikef.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/pmikes.webp',
          }
        ]
      },
      {
        brand: 'POWELL PERALTA',
        price: '$49.95',
        name: 'Skull & Sword Fade Colby Deck',
        width: '8.25 x 31.95',
        image: [{
            imageName: 'Image 1 Alt',
            imageSrc: './img/pskullb.webp',
          },
          {
            imageName: 'Image 2 Alt',
            imageSrc: './img/pskullf.webp',
          },
          {
            imageName: 'Image 3 Alt',
            imageSrc: './img/pskulls.webp',
          }
        ]
      },
      {
      brand: 'POWELL PERALTA',
      price: '$99.95',
      name: 'Flight Bones Pink 247 Deck',
      width: '8.0 x 31.45',
      image: [{
          imageName: 'Image 1 Alt',
          imageSrc: './img/pflightb.webp',
        },
        {
          imageName: 'Image 2 Alt',
          imageSrc: './img/pflightf.webp',
        },
        {
          imageName: 'Image 3 Alt',
          imageSrc: './img/pflights.webp',
        }
      ]
    },
    {
      brand: 'FLIP',
      price: '$64.99',
      name: 'Penny Classic Deck',
      width: '8.375 x 31.85',
      image: [{
          imageName: 'Image 1 Alt',
          imageSrc: './img/fpennyb.webp',
        },
        {
          imageName: 'Image 2 Alt',
          imageSrc: './img/fpennyf.webp',
        },
        {
          imageName: 'Image 3 Alt',
          imageSrc: './img/fpennys.webp',
        }
      ]
    },
    {
      brand: 'FLIP',
      price: '$64.99',
      name: 'Rabelo Classic Deck',
      width: '8.13 x 31.85',
      image: [{
          imageName: 'Image 1 Alt',
          imageSrc: './img/frabelob.webp',
        },
        {
          imageName: 'Image 2 Alt',
          imageSrc: './img/frabelof.webp',
        },
        {
          imageName: 'Image 3 Alt',
          imageSrc: './img/frabelos.webp',
        }
      ]
    },
    {
      brand: 'FLIP',
      price: '$64.99',
      name: 'Mountain Spray Crest Yellow Deck',
      width: '9.0 x 32.57',
      image: [{
          imageName: 'Image 1 Alt',
          imageSrc: './img/fmountb.webp',
        },
        {
          imageName: 'Image 2 Alt',
          imageSrc: './img/fmountf.webp',
        },
        {
          imageName: 'Image 3 Alt',
          imageSrc: './img/fmounts.webp',
        }
      ]
    },
    {
      brand: 'FLIP',
      price: '$64.99',
      name: 'Mountain Crest Red Deck',
      width: '9.0 x 32.57',
      image: [{
          imageName: 'Image 1 Alt',
          imageSrc: './img/fmountrb.webp',
        },
        {
          imageName: 'Image 2 Alt',
          imageSrc: './img/fmountrf.webp',
        },
        {
          imageName: 'Image 3 Alt',
          imageSrc: './img/fmountrs.webp',
        }
      ]
    },

]

// -------- HTML ELEMENTS & SETTING AS GLOBAL SCOPED --------


// // Get the sort button:
// const sortByNameButton = document.getElementById('nameButton');

// -------- POPULATE CARDS & Initial Population --------

// Populate cards - no sorting just populatin
function populateCards(array) {
  // clear out any results first:
  $('#results').html('');
  // Loop over the students and create a crad for each student - for loop
  for (let i = 0; i < array.length; i++) {
    // then populate:

    const productcard = `
            <div class="card">
            <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${array[i].image[0].imageSrc}" alt="${array[i].image[0].imageName} image 1"></div>
                  <div class="swiper-slide"><img src="${array[i].image[1].imageSrc}" alt="${array[i].image[1].imageName} image 2"></div>
                  <div class="swiper-slide"><img src="${array[i].image[2].imageSrc}" alt="${array[i].image[2].imageName} image 3"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
                <div class="card-details">
                    <h3>${array[i].brand}</h3>
                    <h4>${array[i].name}</h4>
                    <h6> Width: ${array[i].width}</h6>
                    <h5> Price: ${array[i].price}</h5>
                </div>
            </div>
        `

    $('#results').append(productcard)

    // Re-initialize Swiper Instances
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach(swiperEl => {
      new Swiper(swiperEl, {
        direction: 'vertical',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    });
  }
}

populateCards(products);

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

// ---------- SORT BY PRICE HIGH --------

// Sort by Price High
const sortByPriceHigh = $('#price-high');

function sortbyPriceHigh() {
  const sortedPrices = products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  populateCards(sortedPrices);
}

sortByPriceHigh.on('click', function () {
  sortbyPriceHigh();
});

// ---------- SORT BY PRICE LOW --------

// Sort by Price Low
const sortByPriceLow = $('#price-low');

function sortbyPriceLow() {
  const sortedPrices = products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  populateCards(sortedPrices);
}

sortByPriceLow.on('click', function () {
  sortbyPriceLow();
});

// ---------- SORT BY WIDTH NARROW --------

// Sort by Width Narrow
const sortByWidthNarrow = $('#width-narrow');

function sortbyWidthNarrow() {
  const sortedwidth = products.sort((a, b) => parseFloat(a.width.slice(0)) - parseFloat(b.width.slice(0)));
  populateCards(sortedwidth);
}

sortByWidthNarrow.on('click', function () {
  sortbyWidthNarrow();
});

// ---------- SORT BY WIDTH WIDE --------

// Sort by Width Wide
const sortByWidthWide = $('#width-wide');

function sortbyWidthWide() {
  const sortedwidth = products.sort((a, b) => parseFloat(b.width.slice(0)) - parseFloat(a.width.slice(0)));
  populateCards(sortedwidth);
}

sortByWidthWide.on('click', function () {
  sortbyWidthWide();
});

/** ---------- FILTERING OPTIONS */

// Filter by Brand
const brandFilter = $('#brand-filter');

function filterByBrand() {
  const selectedBrand = brandFilter.val();
  const filteredProducts = selectedBrand ? products.filter(product => product.brand === selectedBrand) : products;
  populateCards(filteredProducts);
}

brandFilter.on('change', function () {
  filterByBrand();
});

// Filter by Price
const priceMin = $('#priceMin');
const priceMax = $('#priceMax');

function filterByPrice() {
  const minPrice = parseFloat(priceMin.val());
  const maxPrice = parseFloat(priceMax.val());
  const filteredProducts = products.filter(product => {
    const priceValue = parseFloat(product.price.replace(/\$/g, ''));
    if ((!isNaN(minPrice) && priceValue < minPrice) || (!isNaN(maxPrice) && priceValue > maxPrice)) {
      return false;
    }
    return true;
  });
  populateCards(filteredProducts);
}

priceMin.on('input', function () {
  filterByPrice();
});

priceMax.on('input', function () {
  filterByPrice();
});

// ---- END OF FILTERING OPTIONS

// Array of Wellington-based attractions
const shops = [{
    name: "Richard's Decks Cuba",
    address: "102 Cuba Street, Te Aro, Wellington 6011",
    image: "./img/dd1.webp",
    longitude: 174.77608879280334,
    latitude: -41.2909277944508
  },
  {
    name: "Richard's Decks Lyall Bay",
    address: "Airport Retail Park, 2 George Bolt Street, Rongotai, Wellington 6022",
    image: "./img/dd2.webp",
    longitude: 174.80269630594262,
    latitude: -41.325034340814305,
  },
  {
    name: "Richard's Decks Manners",
    address: "75 Manners Street, Te Aro, Wellington 6011",
    image: "./img/dd3.webp",
    longitude: 174.7770,
    latitude: -41.2753
  },
  {
    name: "Richard's Decks Newtown",
    address: "3 Jervois Quay, Wellington, New Zealand",
    image: "./img/dd4.webp",
    longitude: 174.78116493935744,
    latitude: -41.31322929358295,
  }
];

// Initialise the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [174.78720446652096, -41.30607122027361],
  zoom: 11.5
});

// Add markers to the map
shops.forEach(shop => {
  // Create a custom marker element using the SVG
  const el = document.createElement('div');
  el.className = 'custom-marker';
  el.innerHTML = `<img src="./img/dd_marker.svg" alt="${shop.name} marker" />`;
  el.style.width = '50px';
  el.style.height = '50px';

  // Create the marker using the custom element
  const marker = new mapboxgl.Marker(el)
    .setLngLat([shop.longitude, shop.latitude])
    .setPopup(new mapboxgl.Popup({
        offset: 25
      }) // add popups
      .setHTML(`
          <img src="${shop.image}" alt="${shop.name} image 1">
          <h3>${shop.name}</h3><p>${shop.address}</p>`))
    .addTo(map);
});

});