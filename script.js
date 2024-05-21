$(document).ready(function () {

  // MAPBOX TOKEN
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

  const products = [{
      brand: 'Darkstar',
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
      brand: 'Darkstar',
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
      brand: 'Darkstar',
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
      brand: 'Darkstar',
      price: '$36.98',
      name: 'General Red Deck',
      width: '8 x 31.6',
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
      brand: 'Girl',
      price: '$44.98',
      name: 'Geering Out To Lunch',
      width: '8 x 31.5',
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
      brand: 'Girl',
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
      brand: 'Girl',
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
      brand: 'Girl',
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
      brand: 'Deathwish',
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
      brand: 'Deathwish',
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
      brand: 'Deathwish',
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
      brand: 'Deathwish',
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
                    <h5> Price: ${array[i].price}</h5>
                    <h5> Width: ${array[i].width}</h5>
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

  // FILTERING OPTIONS

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

});