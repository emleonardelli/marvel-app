import md5 from "md5"
import { MARVEL_API_PRIVATE, MARVEL_API_KEY } from '@env';

const AUTH = {
    PRIVATE: MARVEL_API_PRIVATE,
    KEY: MARVEL_API_KEY,
    URL: 'https://gateway.marvel.com:443',
}

const SERVICES = {
    getComics: '/v1/public/comics',
}

export const getResource = async (resource = 'comic') => {
    const ts = 1;
    const hash = md5(`${ts}${AUTH.PRIVATE}${AUTH.KEY}`);
    const URL = `${AUTH.URL}${SERVICES.getComics}?startYear=2010&limit=99&ts=${ts}&apikey=${AUTH.KEY}&hash=${hash}`
    //console.log(URL);
    let res = await fetch(URL);
    res = await res.json();
    return res.data.results;
}