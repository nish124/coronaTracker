import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  wolrdStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php'
  CountryWiseStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php'
  IndiaStatCasesURL = 'https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise'
  dailyReport= 'https://covid-19-statistics.p.rapidapi.com/reports/total';

  constructor(private http: HttpClient) { }
  getGlobalStats() {
    const headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91"
      })
    }
   return this.http.get(this.wolrdStatURL,headers)
  }

  getCountryStats() {
    const headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91"
      })
    }
    return this.http.get(this.CountryWiseStatURL,headers)
  }

  getIndiaStatCases() {
    const headers = {
      headers: new HttpHeaders({
      "x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
      "x-rapidapi-key": "56bb86f2a2msh86183c17fc28025p1a3601jsnf33e46f129cb",
      "useQueryString": 'true'
    })
    };    
    return this.http.get(this.IndiaStatCasesURL, headers);
  }

  getDailyReport(){
    const headers = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "35f3133e55msha067ee1e9c81dabp197682jsnb532dd31298f",
      "useQueryString": 'true'
  })
  };
  return this.http.get(this.dailyReport, headers);
}
}

