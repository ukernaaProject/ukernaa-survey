const themeButton = document.querySelector('.theme-btn')

themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) 
    {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
    
    else 
    {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})