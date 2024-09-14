const menuBar = document.getElementById("menu-bar");
const headerNav = document.querySelector("#acceuil header nav");
const closeNavBar = headerNav.querySelector("#close-side-bar");

menuBar.addEventListener("click",function(){
    headerNav.classList.toggle("open");
});
closeNavBar.addEventListener("click",function(){
    headerNav.classList.remove("open");
});


const carousselRoots = document.querySelectorAll(".caroussel");


carousselRoots.forEach(function(carousselRoot){
    const previousCarousselItemBtn = carousselRoot.querySelector(".previous-button.next-or-previous-btn");
    const nextCarousselItemBtn = carousselRoot.querySelector(".next-button.next-or-previous-btn");

    const carousselItemsInsideRoot = carousselRoot.querySelectorAll(".caroussel-item");

    carousselItemsInsideRoot.forEach(function(carousselItem){
        carousselItem.classList.remove("active");
    });

    if(carousselItemsInsideRoot.length != 0){
        let activecarousselItemInsideRoot = carousselRoot.querySelector(".caroussel-item.active");
        
        if(activecarousselItemInsideRoot == null){
            carousselItemsInsideRoot[0].classList.add("active");
            activecarousselItemInsideRoot = carousselItemsInsideRoot[0];
        }
        let activeCarousselItemIndex = 0;

        previousCarousselItemBtn?.addEventListener("click",function(){
            carousselItemsInsideRoot[activeCarousselItemIndex].classList.remove("active");
            activeCarousselItemIndex = getPreviousIndex(carousselItemsInsideRoot,activeCarousselItemIndex);
            carousselItemsInsideRoot[activeCarousselItemIndex].classList.add("active");
        });
        nextCarousselItemBtn?.addEventListener("click",function(){
            carousselItemsInsideRoot[activeCarousselItemIndex].classList.remove("active");
            activeCarousselItemIndex = getNextIndex(carousselItemsInsideRoot,activeCarousselItemIndex);
            carousselItemsInsideRoot[activeCarousselItemIndex].classList.add("active");
        });
    }
});

/**
 * 
 * @param {NodeListOf<Element>} arrayOfElements 
 * @param {Number} index 
 * @returns Number next index
 */

function getNextIndex(arrayOfElements,index){
    return (index + 1 >= arrayOfElements.length) ? 0 : index + 1;
};

/**
 * 
 * @param {NodeListOf<Element>} arrayOfElements 
 * @param {Number} index 
 * @returns Number previous index
 */

function getPreviousIndex(arrayOfElements,index){
    return (index - 1 < 0 ) ? ((arrayOfElements.length - 1) >=0 ? arrayOfElements.length - 1 : 0) : index - 1;
};