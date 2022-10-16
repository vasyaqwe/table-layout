const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdown = document.querySelector('.dropdown')
const favoriteBtns = document.querySelectorAll('.favorite-btn')

dropdownBtn.addEventListener('click', (e) => {
    const targetDropdown = document.getElementById(`${e.target.getAttribute('aria-controls')}`)
    e.target.setAttribute('aria-expanded', !targetDropdown.getAttribute('data-visible'))
    targetDropdown.toggleAttribute('data-visible')
})

favoriteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.getAttribute('aria-checked') === "false" ?
            e.target.setAttribute('aria-checked', true) :
            e.target.setAttribute('aria-checked', false)
    })
})