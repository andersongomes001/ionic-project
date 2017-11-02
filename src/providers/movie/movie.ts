import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private endpoint:string = "https://api.themoviedb.org/3/";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  getMovieLatest(page = 1) {
    return this.http.get(this.endpoint + `movie/popular?page=${page}&api_key=` + this.getApikey() );
  }
  getMovieLatests(id){
    return this.http.get(this.endpoint + `movie/${id}?api_key=` +this.getApikey() );
  }
  getApikey(){
    return "thiskey";
  }

}
