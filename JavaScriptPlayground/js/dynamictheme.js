function toggleTheme() {

    //Find the bootstrap link tag
    let currentTheme = document.getElementById('theme');
    console.log(currentTheme.getAttribute('href'));

    //Check if flatly is currently being used
    if (currentTheme.getAttribute('href').includes('flatly')) {
        //If so, replace the href with the darkly css
        currentTheme.setAttribute('href', 'css/bootstrap-darkly-theme.css');
    }
    else {
        currentTheme.setAttribute('href', 'css/bootstrap-flatly-theme.css');
    }

}
//Check to see if the browser's theme has been set previously using localStorage
if (localStorage.getItem('jspgtheme') != null) {
    setTheme(localStorage.getItem('jspgtheme'));

}

//Create a function that allows the user to set their theme to one of the provided choices
function setTheme(themeName){
    let currentTheme = document.getElementById('theme');

    switch (themeName) {
        case 'superhero':
            currentTheme.setAttribute('href', 'css/bootstrap-superhero-theme.css');
            break;
        case 'flatly':
            currentTheme.setAttribute('href', 'css/bootstrap-flatly-theme.css');
            break;
        case 'darkly':
            currentTheme.setAttribute('href', 'css/bootstrap-darkly-theme.css');
            break;

        default:
            break;
    }

    localStorage.setItem('jspgtheme', themeName);

}