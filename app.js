const navButton = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');

navButton.addEventListener('click', displaySideBar);
closeButton.addEventListener('click', hideSideBar);

function displaySideBar(){
    sideBar.classList.toggle('show-sidebar');
}

function hideSideBar(){
    sideBar.classList.remove('show-sidebar');
}