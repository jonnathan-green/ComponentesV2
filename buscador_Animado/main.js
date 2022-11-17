let search = document.querySelector('.search');
let searchBox = document.querySelector('.search_box');
let close = document.querySelector('.close');

search.onclick = () =>{
    searchBox.classList.add('active')
}

close.onclick = () =>{
    searchBox.classList.remove('active')
}
