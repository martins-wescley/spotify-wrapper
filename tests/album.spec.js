import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


import { getAlbum, getAlbumTracks } from '../src/album';

describe('Album', () =>{
    let stubedFetch;
    let promise;
    beforeEach(() =>{
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });
    
    afterEach(() =>{
       stubedFetch.restore(); 
    });
    describe('Smoke tests', () =>{
        it('should have getAlbum method', ()=>{
            expect(getAlbum).to.exist;
        });
        
        it('should have getAlbumTracks method', ()=>{
            expect(getAlbumTracks).to.exist;
        });
    });
    
    describe('getAlgum', () =>{
       it('should call fetch method', () =>{
          const album  = getAlbum();
           
          expect(stubedFetch).to.have.been.calledOnce; 
       });
        
       it('should receice the correct URL', ()=>{
           const album  = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           expect(stubedFetch).to.have.been
               .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
           
           const album2  = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
           expect(stubedFetch).to.have.been
               .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
       });
        
       it('should return the correct Data from Promise', () =>{
           promise.resolves({ album: 'name' });
           
           const album  = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           
           expect(album.resolveValue).to.be.eql({ album: 'name'});
           
       });
    });
})