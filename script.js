// Global Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const header = document.getElementById('header')
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;
}

// Background Color for header & text Box
function setBackgroundColor(value1, value2) {
    header.style.backgroundColor = `rgb( ${value1} / 50%)`;
    textBox.style.backgroundColor = `rgb( ${value2} / 50%)`;
}

// Change Toggle Text & Icon
function setToggle(text, icon1, icon2) {
    toggleIcon.children[0].textContent = text;
    toggleIcon.children[1].classList.replace(icon1, icon2);
}

// Switch between dark and light mode
function toggleDarkLightMode(theme) {
    DARK_THEME === theme ? setBackgroundColor('0 0 0', '255 255 255') : setBackgroundColor('255 255 255', '0 0 0');
    DARK_THEME === theme ? setToggle('Dark Mode', 'fa-sun', 'fa-moon') : setToggle('Light Mode', 'fa-moon', 'fa-sun');
    DARK_THEME === theme ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleDarkLightMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode(LIGHT_THEME)
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme & Make Sure Dark is Working if Selected
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }
}