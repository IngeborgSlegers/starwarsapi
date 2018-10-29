import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  constructor(private http: HttpClient) { }

  private resultsUrl = `https://swapi.co/api` //URL to web api

  /* GET heroes from the server */
  // getResults(choose, search) {
  //   return this.http.get(`${this.resultsUrl}/${choose}/?search=${search}`)
  // }
  
  getResults(choose, search): Observable<any> {
    return this.http.get<Result[]>(`${this.resultsUrl}/${choose}/?search=${search}`)
    // catchError(this.handleError())
  }

  // private handleError<any>(err = 'error', result?: any) {
  //   return (error: any): Observable<any> => {
      
  //     // TODO: send the error to remote to remote logging infrastructure
  //     console.log(error); // log to console instead
  //   }
  // }  
}
