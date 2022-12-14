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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const land_sections=[...document.querySelectorAll('section')];
const nav_menue=document.getElementById('navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function create_list_items(){
    for(section of land_sections){
        li=document.createElement('li');
        li.innerHTML=`<a class="menu__link ${section.id}" href="#${section.id}">${section.dataset.nav}</a>`
      
        nav_menue.appendChild(li);
    }
}
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    for (section of land_sections){
        if(section.getBoundingClientRect().top < 150 && section.getBoundingClientRect().top>= -150){
            if(! section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
                document.querySelector(`li a[href*='#${section.id}']`).classList.add('active_link')
            }
           
        }else{
            section.classList.remove('your-active-class')
            document.querySelector(`li a[href*='#${section.id}']`).classList.remove('active_link')
        }
    }
})


create_list_items();
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active







