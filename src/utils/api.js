const PV_WATTS_BASE_URL = "https://developer.nrel.gov/api/pvwatts/v6.json?api_key=";
const PV_WATTS_PARAMETERS = "&system_capacity=1&azimuth=180&tilt=25&array_type=1&module_type=0&losses=0&address=";
const NREL_API_KEY = "Akt0gLVwYVD83bP28PnXwrzzvTXn2vqfo2VSliWL";

async function getSunlightYearlyAverage(zipcode) {
    const parameters = PV_WATTS_PARAMETERS + zipcode;
    const url = PV_WATTS_BASE_URL + NREL_API_KEY + parameters;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error (response.statusText);
        } 
        return response.json();
    } catch(error) {
        console.log(error)
    }
}

export {
    getSunlightYearlyAverage,
};