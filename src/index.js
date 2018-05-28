import { API_URL } from './config'; 
import album from './album';
import search from './search';
import toJSON from './utils';

export default class SportifyWrapper{
    constructor(options){
        this.apiURL   = options.apiURL || API_URL;
        this.token    = options.token;
        
        this.album    = album.bind(this)();
        this.search   = search.bind(this)();
    }
    
    request(url){
        const headers = {
            headers:{
                Authorization: `Bearer ${this.token}`
        },
    };
        
    return fetch(url, headers).then(toJSON);
    }
}