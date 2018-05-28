import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () =>{
    it('should create an instance of SpotifyWrapper', () =>{
       let spotify = new SpotifyWrapper({});
        
        expect(spotify).to.be.an.instanceof(SpotifyWrapper);
    });
    
    it('should receive apiURL as an option', () =>{
       let spotify = new SpotifyWrapper({
           apiURL: 'blablabla'
       });
        
        expect(spotify.apiURL).to.be.eql('blablabla');
    });
    
    it('should use the default apiURL if not provided', () =>{
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.eql('https://api.spotify.com/v1');
    });
    
    it('shoudl receive token as an option', () =>{
        let spotify = new SpotifyWrapper({
           token: 'foo'
       });
        
        expect(spotify.token).to.be.eql('foo');
    });
   
describe('request method', () =>{
    
    let stubedFetch;
    let promise;
    
    beforeEach(() =>{
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });
    
    afterEach(() =>{
       stubedFetch.restore(); 
    });
    
   it('should have request method', () =>{
       let spotify = new SpotifyWrapper({});
       
       expect(spotify.request).to.exist;
   });
    
   it('should call fecth when request', () =>{
       let spotify = new SpotifyWrapper({
           token: 'foo'
       });
       
       spotify.request('url');
       expect(stubedFetch).to.have.been.calledOnce;
   });
    
    it('should call fecth with right url passed', () =>{
       let spotify = new SpotifyWrapper({
           token: 'foo'
       });
       
       spotify.request('url');
       expect(stubedFetch).to.have.been.calledWith('url');
   });
    
    it('should call fecth with right headers passed', () =>{
       let spotify = new SpotifyWrapper({
           token: 'foo'
       });
        
        const headers = {
            headers:{
                'Authorization': `Bearer foo`
            }
        };
       
       spotify.request('url');
       expect(stubedFetch).to.have.been.calledWith('url', headers);
   });
});
    
});