var elBody = document.querySelector('body')
var elModebtn = document.querySelector('.mode')

elModebtn.addEventListener('click', function() {
    elBody.classList.toggle('dark')
})