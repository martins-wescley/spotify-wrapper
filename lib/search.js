'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = search;
function seacher(type, query) {
    return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);
}

function search() {
    return {
        artists: seacher.bind(this, 'artist'),
        albums: seacher.bind(this, 'album'),
        tracks: seacher.bind(this, 'track'),
        playlists: seacher.bind(this, 'playlist')
    };
}