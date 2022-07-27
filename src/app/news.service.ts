import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient){}

getHeadlines()
{
return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4b871b0e6a7d44e58a6ace6c4c667056');

}


getCategoryHeadlines(category:string)
{
//return this.http.gethttps://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4b871b0e6a7d44e58a6ace6c4c667056');
return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey=4b871b0e6a7d44e58a6ace6c4c667056');

}

//GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=87229b519983412ba54b0c374de74182


getSearchHeadlines(query:string)
{
//return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4b871b0e6a7d44e58a6ace6c4c667056');
return this.http.get('https://newsapi.org/v2/everything?q='+query+'&apiKey=4b871b0e6a7d44e58a6ace6c4c667056');

}


}
