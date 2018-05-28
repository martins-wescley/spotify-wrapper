global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
    token: 'BQAnXBLCjh6lNHnlE-aStVrakLf-_5MCAXZQ8hSOKy3kdJQXBNOQoW_isbt9grzv8i8Hd7Ejmfh2QsZV2j48ST_8uZ1IO0X-Yg402nixj2flKdSZ5lLJQ_LeRSAAPTNTX0FqZWlyL8jHDxJXQrBYpX3RdSMLxQ'
})

const albums = spotify.search.albums('Incubus');


//albums.then(data => console.log(data));
albums.then(data => data.albums.items.map(item => console.log(item.name)));