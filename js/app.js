/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Global variable for sections & Navigation
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
//end of global variables


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navCreator = () => {

    // Sections Loop
    let navLI = '';
    sections.forEach(section =>{
        const navID = section.id;
        const navDATA = section.dataset.nav;

        navLI += `<li><a class="menu__link" href="#${navID}">${navDATA}</a></li>`;
    });
    //adding the ListItems to the UL tag in HTML
    nav.innerHTML = navLI ; 
};

navCreator();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


