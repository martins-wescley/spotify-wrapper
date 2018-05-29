global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
    token: 'BQBr2zuqlGMd56FokASyOQsvri6anuece2YONzCZizF5VAUHzgJvTXZ0ZBMIgy1zo0yRif8UV31-E3QOOfV7uQ2XT8YdS09fivNx43S_rpEcVIn9aWu4OPM8Mo3IE5KP7XV9-Ovfb8a1FB7-QRmqawPAibiq-A'
})

const albums = spotify.search.albums('Incubus');


//albums.then(data => console.log(data));
albums.then(data => data.albums.items.map(item => console.log(item.name)));