import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user.model';
import { Favourite } from 'src/Favourite.model';
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private http:HttpClient) { }

  addtofavourite(favourite:Favourite){
    return this.http.post<Favourite>('http://localhost:1225/fav',favourite);
  }

  getFavourites(username : string){
    return this.http.get<Favourite[]>(`http://localhost:1225/fav/fav/${username}`);
  }
}