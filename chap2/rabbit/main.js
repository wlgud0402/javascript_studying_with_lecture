const find_btn = document.querySelector('.find_btn')
const rabbit = document.querySelector('#rabbit')

find_btn.addEventListener('click', (event) => {
    rabbit.scrollIntoView({behavior: 'smooth', block:'center'});
})