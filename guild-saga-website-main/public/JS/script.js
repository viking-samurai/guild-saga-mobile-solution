//Navigation Section//////////////
//Navbar operation
function triggerDropdown(clicked_id) {
    //Confirm the click
    let id = clicked_id;
    //Establish the parameters
    if(id === "gameDropdownButton") {
        //Push out the response
        document.getElementById("databaseDropdown").classList.remove("show");
        document.getElementById("gameDropdown").classList.toggle("show");
    }
    if(id === "databaseDropdownButton") {
        //Push out the other response
        document.getElementById("gameDropdown").classList.remove("show");
        document.getElementById("databaseDropdown").classList.toggle("show");
    }
}

//Navigation button colour switch on click
//Declare the constants inside the dropdown menu, but not the menu
const navLinks = document.querySelectorAll('.dropdown-color-trigger');
//Colour switch on click
function colourSwitch(e) {
    this.classList.add('purpleize');
}
//Declare the colour switch trigger
navLinks.forEach(navLink => navLink.addEventListener('click', colourSwitch));



//Sidebar construction
//Declare both buttons and the menu.  Nav button starts 'open'
const linkBox = document.getElementById("mySidenav");
const openButton = document.getElementById("navButton");
const closeButton = document.getElementById("closeButton");
//Click either button to toggle the button and either reveal or collapse the nav menu
function toggleSidenav() {
    linkBox.classList.toggle("closed");
    openButton.classList.toggle("closed");
    closeButton.classList.toggle("closed");
}

//Sidebar operation
function triggerSideDropdown(clicked_id) {
    //Confirm the click
    let id = clicked_id;
    //Establish the parameters
    if(id === "sideGameDropdownButton") {
        //Push out the response
        document.getElementById("sideDatabaseDropdown").classList.remove("show");
        document.getElementById("sideGameDropdown").classList.toggle("show");
    }
    if(id === "sideDatabaseDropdownButton") {
        //Push out the other response
        document.getElementById("sideGameDropdown").classList.remove("show");
        document.getElementById("sideDatabaseDropdown").classList.toggle("show");
    }
}



//Cleaning up dropdowns
//Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    //If you click anywhere off the button or the menu...
    if(!event.target.matches('.dropbtn')) {
        //Declare all dropdown menus
        const dropdowns = document.querySelectorAll(".dropdown-content, .sideshow-dropdown-content");
        //For each dropdown menu currently revealed, unreveal it.
        for (var i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            } 
        }
    }
}



//Roadmap Section///////////////////
//Checkcicle operation
function checkRoadmap() {
    //Create the components
    const checkboxes = document.querySelectorAll('.check-circle');
    const items = document.querySelectorAll('.roadmap-list-item');
    //Start the loop
    for(var i=0; i<checkboxes.length; i++) {
        //Run the variable
        if (checkboxes[i].classList.contains('event-complete')) {
            //Complete the solution
            items[i].classList.add('triggered');
        }
    }
}