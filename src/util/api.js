import axios from 'axios';
const summaryUrl = 'https://api.covid19api.com/summary';
const countriesNameURl = 'https://api.covid19api.com/countries';
export const covidApi = {
    async getAllCountries() {
        try {
            const response = await axios.get(countriesNameURl);
            const countries = response.data.map((country) => {
                return {
                    name: country.Country,
                    flagCode: country.ISO2
                };
            });
            return countries;
        }
        catch (e) {
            return [];
        }
    },
    async getCountryData(name) {
        try {

            const response = await axios.get(summaryUrl);
            if (response.status === 200) {
                if (name === 'Global') {
                    const data = response.data.Global;
                    return convertData(data, 'Global')
                }
                else {
                    const countries = response.data.Countries;
                    const countryFound = countries.find((country) => country.Country === name)
                    if (countryFound) {
                        return convertData(countryFound, name);
                    }
                    else {
                        return convertData(countryFound, name);
                    }
                }
            }
            throw new Error();
        }
        catch (e) {
            return convertData(undefined, 'name');
        }
    }
}

const convertData = (data = {}, country) => {
    return {
        NewConfirmed: data.NewConfirmed | 0,
        NewDeaths: data.NewDeaths | 0,
        NewRecovered: data.NewRecovered | 0,
        TotalConfirmed: data.TotalConfirmed | 0,
        TotalDeaths: data.TotalDeaths | 0,
        TotalRecovered: data.TotalRecovered | 0,
        country: country
    }
}