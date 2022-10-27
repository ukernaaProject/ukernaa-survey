const themeButton = document.querySelector('.theme-btn')
const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const nav = document.getElementById('nav')
const submitBtn = document.querySelector('.submit-btn')

themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'


themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    nav.classList.toggle('dark')
    login.classList.toggle('dark')
    input.classList.toggle('dark')
    submitBtn.classList.toggle('dark')
    signup.classList.toggle('dark')

    if (document.body.classList.contains('dark'))
    {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
    
    else 
    {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})
