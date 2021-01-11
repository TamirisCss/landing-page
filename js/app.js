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

const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
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

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// build the nav
for (let section of sections) {
    let list = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute("href", `#${section.id}`);
    a.innerHTML = section.getAttribute("data-nav");
    a.classList.add('menu__link');
    a.setAttribute("id", `link_${section.id}`);

    list.appendChild(a);
    navList.appendChild(list);
}

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
// Set sections as active
window.addEventListener('scroll', function(event){
    sections.forEach(element => {
        element.classList.remove('your-active-class')
        let a = document.getElementById(`link_${element.id}`);
        a.classList.remove('menu__link_active');
        var position = element.getBoundingClientRect();

        // Add class 'active' to section when near top of viewport
        if(position.top >= (0 - element.clientHeight + 10) && position.bottom <= element.clientHeight + 10) {
            a.classList.add('menu__link_active');
            element.classList.add('your-active-class');
        }
        
    });
});