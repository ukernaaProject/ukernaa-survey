const themeButton = document.querySelector('.theme-btn')
const login = document.querySelector('.login')
const nav = document.getElementById('nav')
const submitBtn = document.querySelector('.submit-btn')

themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'


themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    nav.classList.toggle('dark')
    login.classList.toggle('dark')
    input.classList.toggle('dark')
    submitBtn.classList.toggle('dark')

    if (document.body.classList.contains('dark'))
    {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
    
    else 
    {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})

// Password toggle

const showToggle = document.querySelector('.show-hide')

const password = document.getElementById('password')

showToggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'

function showHide() {
    if (password.type === "password") {
        password.setAttribute('type', 'text')
        showToggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    } else {
        password.setAttribute('type', 'password')
        showToggle.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
}