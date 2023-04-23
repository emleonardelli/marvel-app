import md5 from "md5"
import { MARVEL_API_PRIVATE, MARVEL_API_KEY } from '@env';

const AUTH = {
    PRIVATE: MARVEL_API_PRIVATE,
    KEY: MARVEL_API_KEY,
    URL: 'https://gateway.marvel.com:443/v1/public/',
}

const SERVICES = {
    amount: 10,
}

export const getResource = async (resource = 'comics') => {
    const ts = 1;
    const hash = md5(`${ts}${AUTH.PRIVATE}${AUTH.KEY}`);
    const URL = `${AUTH.URL}${resource}?&limit=${SERVICES.amount}&ts=${ts}&apikey=${AUTH.KEY}&hash=${hash}`
    //console.log(URL);
    let res = await fetch(URL);
    res = await res.json();
    return res.data.results;
}

export const getEntityResource = async (resource, id) => {
    const ts = 1;
    const hash = md5(`${ts}${AUTH.PRIVATE}${AUTH.KEY}`);
    const URL = `${AUTH.URL}${resource}/${id}?&limit=${SERVICES.amount}&ts=${ts}&apikey=${AUTH.KEY}&hash=${hash}`
    let res = await fetch(URL);
    res = await res.json();
    return res.data.results[0];
}