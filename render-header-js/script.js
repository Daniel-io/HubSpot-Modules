//  MOBILE NAVIGATION PANEL  
const openMenu = document.querySelector('.js-toggleMenu');
const closeMenu = document.querySelector('.js-closeMenu');
const mobielMenu = document.querySelector('.js-mobilePanel');

openMenu.addEventListener('click', (el) => {
  mobielMenu.classList.add('is-open');
 boxCloser();
})

closeMenu.addEventListener('click', (el) => {
  mobielMenu.classList.remove('is-open');
})


// TRANSACTION POPUP
// const openTransaction = document.querySelector('.js-openTransaction');
// const closeTransaction = document.querySelector('.js-closeTransaction');
// const transactionPopup = document.querySelector('.js-transaction');

// openTransaction.addEventListener('click', (el) => {
//   transactionPopup.classList.add('is-open');
// })

// closeTransaction.addEventListener('click', (el) => {
//   transactionPopup.classList.remove('is-open');
// })

$(document).ready(function(){
  $(".c-page-head").sticky({topSpacing:0});
});





const openSubMenu = document.querySelectorAll('.hs-item-has-children');
let itemArray = Array.from(openSubMenu);



itemArray.forEach((openItem) => { //For each li with a sub menu
  
  openItem.addEventListener('click', function(el) {
    
    let childMenu = openItem.children[1];
    
    itemArray.forEach((el) => {
      
      //Close any submenu that may be open
      if(el.children[1].classList.contains('child-open')) {
         el.children[1].classList.remove('child-open');
        
      //Open clicked submenu 
      } else if(el.children[1] == childMenu) {
        childMenu.classList.toggle('child-open');
      }

    })
    
  });
  
  
})

function boxCloser(){
      document.querySelector(".js-mobilePanel").addEventListener("click", function(e){
        mobielMenu.classList.remove('is-open');

    })
    document.querySelector(".c-mobile-panel").addEventListener("click", function(e){
     e.stopPropagation();

    })
}


document.querySelectorAll('li.hs-menu-item:not(.hs-item-has-children) a').forEach(item => {
  item.addEventListener('click', event => {
  mobielMenu.classList.remove('is-open');
   
  })
})

