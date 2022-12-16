document.addEventListener("DOMContentLoaded",() => {
    const login = document.getElementById('login');
    const form = document.getElementById('formDiv');
    const home = document.getElementById('home');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    login.addEventListener('click',() => {
        home.style.display = "none";
        header.style.display = "none";
        footer.style.display = "none";
        form.removeAttribute('hidden');

    })
})
