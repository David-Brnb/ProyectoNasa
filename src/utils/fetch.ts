const API_KEY = 'v3y9MJEzrnAad21mFNuINNSJ0mXDcPgydQer5Fvv';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: string) => {
    if(!(typeof urlParams !== 'undefined' && urlParams?.length>0)){
        urlParams='';
    }

    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams}`);
        const data = await response.json();

        return Promise.resolve(data);
    } catch(error) {
        return Promise.reject(error);
    }
}