const toggleMenuElement = document.getElementById('toggle-menu')
const mainMenuElement = document.getElementById('main-menu')
const titleElement = document.getElementById('logo__title')
toggleMenuElement.addEventListener('click',()=>{
    mainMenuElement.classList.toggle('main-menu--show')
    titleElement.classList.toggle('main-title--none')
})