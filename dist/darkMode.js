document.addEventListener('DOMContentLoaded', () => {
const colorModeSwitch = document.getElementById('colorModeSwitch');

const getPreferredTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
    }
    return 'light';
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('colorMode', theme);
    if (colorModeSwitch) {
    colorModeSwitch.checked = theme === 'dark';
    }
};

// Load theme on page load
const savedTheme = localStorage.getItem('colorMode');
setTheme(savedTheme || getPreferredTheme());

if (colorModeSwitch) {
    colorModeSwitch.addEventListener('change', (event) => {
    setTheme(event.target.checked ? 'dark' : 'light');
    });
}

// Listen for system changes for users who haven't set a preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('colorMode')) {
    setTheme(e.matches ? 'dark' : 'light');
    }
});
});