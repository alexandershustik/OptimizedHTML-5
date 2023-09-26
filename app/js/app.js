/** @format */

// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import intlTelInput from 'intl-tel-input';

document.addEventListener('DOMContentLoaded', () => {
    // Custom JS
    const input = document.querySelector('.form__phone');
    intlTelInput(input, {
        initialCountry: 'tm',
        onlyCountries: ['uz', 'tr', 'tm', 'ua', 'ru', 'by', 'kz'],
    });

    const input1 = document.querySelector('.form__phone1');
    intlTelInput(input1, {
        initialCountry: 'tm',
        onlyCountries: ['uz', 'tr', 'tm', 'ua', 'ru', 'by', 'kz'],
    });
});

//utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
