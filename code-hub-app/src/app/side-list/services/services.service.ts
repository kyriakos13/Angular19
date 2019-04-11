import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private COUNTRIESURL ='https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies'
  private BYCOUNTRYURL = 'https://restcountries.eu/rest/v2/capital/'
  private COUNTRYCURRENCY = 'https://restcountries.eu/rest/v2/currency/EUR?fields='
  constructor(private http: HttpClient) { }

  getCountries() {
  return this.http.get(this.COUNTRIESURL);
  }

  getCountryByName(name) {
    return this.http.get(this.BYCOUNTRYURL + name);
    }

    getCountryCurrency(name) {
      return this.http.get(this.COUNTRYCURRENCY + name);
      }

   
}
