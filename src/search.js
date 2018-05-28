function seacher(type, query){
    return this.request(`${this.apiURL}/search?q=${query}&type=${type}`)
}

export default function search(){
    return {
        artists   : seacher.bind(this, 'artist'),
        albums    : seacher.bind(this, 'album'),
        tracks    : seacher.bind(this, 'track'),
        playlists : seacher.bind(this, 'playlist')
    };
}