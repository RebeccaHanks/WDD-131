const themeSelector = document.querySelector('#lightdark');


function changeTheme() {
    const currentValue = themeSelector.value;

    const body = document.body;
    const logo = document.querySelector('footer img');

    if (currentValue = 'dark') {
        body.classList.add('.dark');
        logo.src = 'byui-logo_white.png';
    }
    else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp'
    }
}

themeSelector.addEventListener('change', changeTheme);
