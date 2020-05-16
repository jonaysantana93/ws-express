const hbr = require('hbs');

//helpers
hbr.registerHelper('getyear', () => {
    return new Date().getFullYear()
});

hbr.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});