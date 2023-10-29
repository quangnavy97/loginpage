const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.loginBtn-popup')
const iconClose = document.querySelector('.icon-close')
const welcome = document.querySelector('.welcome')


registerLink.addEventListener('click', function(){
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', function(){
    wrapper.classList.add('active-popup')
   
})

iconClose.addEventListener('click', function(){
    wrapper.classList.remove('active-popup')
})

btnPopup.addEventListener('click', function(){
    welcome.classList.remove('active')
   
})
iconClose.addEventListener('click', function(){
    welcome.classList.add('active')
})