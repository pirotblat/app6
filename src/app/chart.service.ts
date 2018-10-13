import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private _http: HttpClient) { }

  getChart() {
    //return this._http.get('http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22');
    //return this._http.get('assets/chart-date.json');

    return this._http.get('assets/chart-data.json');
  }
}
