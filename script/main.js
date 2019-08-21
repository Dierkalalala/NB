let translate = 0;
const leftButton = document.getElementsByClassName('left-arrow')[0]
const rightButton = document.getElementsByClassName('right-arrow')[0]
const rows = document.getElementsByClassName('slider-content-row')
leftButton.addEventListener('click', goLeft);
rightButton.addEventListener('click', goRight)
const rowItems = document.getElementsByClassName('slider-content-row-item')
const clientWidth = document.documentElement.clientWidth
const lastCarouselElement = rowItems[rowItems.length -1]

function goLeft(e) {
    if(translate >= 0){
        return false
    } else{
        translate += 200
    }
    console.log('123')
    Array.from(rows).forEach((row) =>{
        row.style.transform = 'translateX(' + translate + 'px)'
    })
}
function goRight(e) {
    if(lastCarouselElement.getBoundingClientRect().x + (lastCarouselElement.getBoundingClientRect().width)<= clientWidth ){
        return false
    } else{
        translate -= 200
    }
    Array.from(rows).forEach((row) =>{
        row.style.transform = 'translateX(' + translate + 'px)'
    })
}
const menuwka = document.getElementsByClassName('small_devices_menu')[0]
const close = document.getElementsByClassName('close')[0]
const burger = document.getElementsByClassName('burger')[0]
burger.addEventListener('click', toggleMenu)
function toggleMenu() {
    menuwka.classList.add('active')


}
close.addEventListener('click', closeMenu)
function closeMenu() {
    menuwka.classList.add('animate')
    setTimeout('menuwka.classList.remove(\'active\');menuwka.classList.remove(\'animate\')', 1000)
}
const form = document.getElementsByClassName('logInForm')[0]
const formButton = document.getElementsByClassName('registration-button')[0]
const closeForm = document.getElementsByClassName('close-form')[0]
formButton.addEventListener('click', openForm);
function openForm() {
    form.classList.add('active')
    document.documentElement.style.overflow = 'hidden'
}
closeForm.addEventListener('click', closeLogIn)
function closeLogIn() {
    form.classList.remove('active')
    document.documentElement.style.overflow = 'auto'
}
const referenceForm = document.getElementsByClassName('leave-reference-form')[0]
const referenceButtons = document.getElementsByClassName('default-btn')
Array.from(referenceButtons).forEach((btn) => {
    btn.addEventListener('click', showRefWindow)
})
function showRefWindow() {
    referenceForm.classList.add('active')
}
const closeReference = referenceForm.getElementsByClassName('close-form')[0]
closeReference.addEventListener('click', closeReferencee)
function closeReferencee() {
    referenceForm.classList.remove('active')
}
const lazyLoadedElements = document.querySelectorAll('section')
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}
function handleElements(elems, observer){
    elems.forEach(elem => {
        if(elem.intersectionRatio > 0){
            loadElement(elem.target)
        }
    })
}
function loadElement(elem) {
    elem.classList.add('appear')
}
const observer = new IntersectionObserver(handleElements, options);
lazyLoadedElements.forEach(elem => {
    observer.observe(elem)
})
