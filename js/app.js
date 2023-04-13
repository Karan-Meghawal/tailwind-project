let ham =  document.getElementById('hamburger')
let menu = document.getElementById('menu')


ham.addEventListener('click',()=>{
    ham.classList.toggle('open')
    menu.classList.toggle('hidden')
})