const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    category: "dinner",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


//target the div containers(button & section buttons)
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//display page content on Load...
//Declare Javascript root
window.addEventListener('DOMContentLoaded', (event) => {
  //console.log(event);
  displayMenuButton()
  displayMenuItems(menu)
})

//funtion for display menu button...

function displayMenuButton() {
  //create an array of categories, whereby the array does not have dupliate category
  let categories = menu.reduce((value, item) => {
   
    //The 'item'stores all the item i

    if(!value.includes(item.category)){
      value.push(item.category)
    }
    return value
  },['all'])
  
  console.log(categories)
  const categoryButton = categories.map((category) => {
    return `<button type="button" class='filter-btn' data-id="${category}">
              ${category}
            </button>`
  }).join('\n')

  container.innerHTML = categoryButton;

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (event) =>{
      const category = event.currentTarget.dataset.id

      // \filter through the menu array and get the items base on the button type
      const menuCategory = menu.filter((item) => {
        if (item.category === category) {
          return item
        }
      })

      if (category === 'all') {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
    })
  })

  console.log(categoryButton)
  
}

//define the display menu item function
function displayMenuItems(menuItems){
  //loop through the menu array and output a new object.
  let displayMenu = menuItems.map((item) => {

    return `<article class="menu-item">
              <img src=${item.img} alt='menu-item' class="photo"/>
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4>${item.price}</h4>
                  </header>
                  <p class='item-text'>
                    ${item.desc}
                  </p>
                </div>
            </article>`
  })

  displayMenu = displayMenu.join('\n')
  sectionCenter.innerHTML = displayMenu
  // console.log(displayMenu);
}