const togglebtn = document.querySelector('.togglebtn')
const toggleIcon = document.querySelector('.togglebtn i')
const dropdown = document.querySelector('.dropdown')

togglebtn.onclick = function(){
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    toggleIcon.classList = isOpen
        ?'fa-solid fa-xmark'
        :'fa-solid fa-bars'
}