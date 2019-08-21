let translate             = 0;
const leftButton          = document.getElementsByClassName('left-arrow')[0]
const rightButton         = document.getElementsByClassName('right-arrow')[0]
const rows                = document.getElementsByClassName('slider-content-row')

const rowItems            = document.getElementsByClassName('slider-content-row-item')
const clientWidth         = document.documentElement.clientWidth
const lastCarouselElement = rowItems[rowItems.length -1]
const menuwka             = document.getElementsByClassName('small_devices_menu')[0]
const close               = document.getElementsByClassName('close')[0]
const burger              = document.getElementsByClassName('burger')[0]
const form                = document.getElementsByClassName('logInForm')[0]
const formButton          = document.getElementsByClassName('registration-button')[0]
const closeForm           = document.getElementsByClassName('close-form')[0]
const referenceForm       = document.getElementsByClassName('leave-reference-form')[0]
const referenceButtons    = document.getElementsByClassName('default-btn')
const closeReference      = referenceForm.getElementsByClassName('close-form')[0]
leftButton.addEventListener('click', goLeft);   // carousel event listeners
rightButton.addEventListener('click', goRight)

Array.from(referenceButtons).forEach((btn) => {   // reference window event listeners
    btn.addEventListener('click', showRefWindow)
})
closeReference.addEventListener('click', closeReferencee)

formButton.addEventListener('click', openForm); // form modal event listener 
closeForm.addEventListener('click', closeLogIn)

burger.addEventListener('click', toggleMenu)  // menu event listeners 
close.addEventListener('click', closeMenu)
 // FUNCTIONS RELATED TO MENU

function toggleMenu() {
    menuwka.classList.add('active')
}
function closeMenu() {
    menuwka.classList.add('animate')
    setTimeout('menuwka.classList.remove(\'active\');menuwka.classList.remove(\'animate\')', 1000)
}

// FUNCTIONS RELATED TO REGISTRATION FORM

function openForm() {
    form.classList.add('active')
    document.documentElement.style.overflow = 'hidden'
}

function closeLogIn() {
    form.classList.remove('active')
    document.documentElement.style.overflow = 'auto'
}

 // FUNCTIONS RELATED TO REFERENCE WINDOW

function showRefWindow() {
    referenceForm.classList.add('active')
}
function closeReferencee() {
    referenceForm.classList.remove('active')
}

// FUNCTIONS RELATED TO CAROUSEL

function goLeft(e) {
    if(translate >= 0){
        return false
    } else{
        translate += 200
    }
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


// LAZYLOAD
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
