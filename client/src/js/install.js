const butInstall = document.getElementById('buttonInstall'); 
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});