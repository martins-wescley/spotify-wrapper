import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylistis } from '../src/main';

describe('Spotify Wrapper', () =>{
  describe('smoke tests', () =>{
      //search (Generico) - + de um tipo
      //searchAlbums
      //searchArtists
      //searchTracks
      //searchPlaylistis
      
      it('should exist the search method', () =>{
          expect(search).to.exist;
      });
      
      it('should exist the searchAlbums method', () =>{
          expect(searchAlbums).to.exist;
      });
      
      it('should exist the searchArtists method', () =>{
          expect(searchArtists).to.exist;
      });
      
      it('should exist the searchTracks method', () =>{
          expect(searchTracks).to.exist;
      });
      
      it('should exist the searchPlaylistis method', () =>{
          expect(searchPlaylistis).to.exist;
      });
  })  
})