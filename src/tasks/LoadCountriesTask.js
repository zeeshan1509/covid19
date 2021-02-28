import {features} from '../data/countries.json'
import papa from 'papaparse';
import legendItems from '../entities/LegendItems';

//const features = require('../data/countries.json');
class LoadCountriesTask {
    covid19DataUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
    // setState = null;
    // mapCountries = features;

    // load = (setState) => {
    //     this.setState = setState;
    //     papa.parse(this.covid19DataUrl, {
    //         download: true,
    //         header: true,
    //         complete: (result)=>this.#processCovidData(result.data)
    //     })
    
    // }; 
    // #processCovidData = (covidCountries) => {
    //     for (let i=0; i< this.mapCountries.length; i++){
    //         const mapCountry = this.mapCountries[i];
    //         const covidCountry = covidCountries.find(
    //             (covidCountry)=>covidCountry.ISO3 = mapCountry.properties.ISO_A3
    //         );
    //         mapCountry.properties.confirmed = 0;
    //         mapCountry.properties.confirmedText = "0";

    //         if(covidCountry != null){
    //             const confirmed = Number(covidCountry.Confirmed);
    //             mapCountry.properties.confirmed=confirmed;
    //             mapCountry.properties.confirmedText = this.#formatNumberWithCommas(confirmed);

    //         }
    //     }
    //     this.setState(this.mapCountries)

    // };





    covidUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };

  #processCovidData = (covidCountries) => {
    for (let i = 0; i < features.length; i++) {
      const country = features[i];
      //console.log(country);
      const covidCountry = covidCountries.find(
        (covidCountry) => country.properties.ISO_A3 === covidCountry.ISO3
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(
          confirmed
        );
      }
      this.#setCountryColor(country);
    
    }

    this.setState(features);
  };

  #setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );
    if (legendItem != null) country.properties.color = legendItem.color;
  }
   #formatNumberWithCommas = function (number)  {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
}

export default LoadCountriesTask;