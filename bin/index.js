'use strict';

var _search = require('../src/search');

var _album = require('../src/album');

module.exports = {
    search: _search.search, searchAlbums: _search.searchAlbums, searchArtists: _search.searchArtists, searchTracks: _search.searchTracks, searchPlaylists: _search.searchPlaylists, getAlbum: _album.getAlbum, getAlbums: _album.getAlbums, getTracks: _album.getTracks
};