let searchButton = document.querySelector('.search_button');
let closeButton = document.querySelector('.close_button');
let searchBox = document.querySelector('.search_box');

searchButton.onclick = () =>{
    searchBox.classList.add('active');
    searchButton.classList.add('active');
    closeButton.classList.add('active');
}

closeButton.onclick =  () =>{
    searchBox.classList.remove('active')
    searchButton.classList.remove('active')
    closeButton.classList.remove('active')
}