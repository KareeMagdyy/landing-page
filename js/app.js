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



// Add class 'active' to section when near top of viewport
function viewPort (viewP) {

    let sectionPosition = viewP.getBoundingClientRect();
    return (sectionPosition.top >= 0);
}

//highlight the viewed section
function toggleActiveClass() {
    for (section of sections) {
        // section in viewport
        if (viewPort(section)){
            if (!section.classList.contains('your-active-class')) {
                //adding the class if not added
                section.classList.add('your-active-class');
            }
        } else { // removing the class if not in viewport
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navCreator();
// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', toggleActiveClass);

