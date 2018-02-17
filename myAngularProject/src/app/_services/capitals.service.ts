import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';

import { Capital } from "../_models/capital";

import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

//const BASEURL = "http://localhost:27121/";
@Injectable()
export class LocationsService {
    readonly BASEURL: string;
    constructor(private http: HttpClient) {
        //this.BASEURL = environment.baseApi;
    }

  getCapitals(page: number, count: number, searchBy?: string): Observable<Location[]> {
    var url = 'api/locations/paged?page=' + page + '&count=' + count + (searchBy ? '&searchBy=' + searchBy : '');
    return this.http.get<Location[]>(this.BASEURL + url);
    }

  add(model): Observable<Location> {
    return this.http.post<Location>(this.BASEURL + 'api/locations', model);
  }
}