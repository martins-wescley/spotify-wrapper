import { HEADERS } from './config';

export const getAlbum = (id)=>{
    fetch(`https://api.spotify.com/v1/albums/${id}`, HEADERS)
        .then(data => data.json())
}

export const getAlbumTracks = ()=>{}