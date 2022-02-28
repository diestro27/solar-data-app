const BASE_URL = "https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=";
const NREL_API_KEY = "Akt0gLVwYVD83bP28PnXwrzzvTXn2vqfo2VSliWL";

async function getAverageGHI(zipcode) {
    // const regex = / /g;
    // const address = address.trim().replace(regex, '+');
    const addressParameter = `&address=${zipcode}`
    const url = BASE_URL + NREL_API_KEY + addressParameter;
    try  {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error (response.statusText);
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
    
}

export {
    getAverageGHI,
};