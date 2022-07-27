import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favourite } from 'src/Favourite.model';
import { FavouriteService } from '../FavouriteService';

@Component({
  selector: 'app-fav-list',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private favouriteService:FavouriteService,private router:Router,private actRoute:ActivatedRoute) { }
     
     username=''
  ngOnInit(): void {
    this.getNewsHeadLInes()
      
  }

 
  favourites:Favourite[]=[];
   favourite=new Favourite();
  

  getNewsHeadLInes()
  {
  let username=localStorage.getItem('email')+'';
  console.log(username)  
  this.favouriteService.getFavourites(username).subscribe(
data=>{

 this.favourites=data;
 

},

error=>{
  console.log(error)
}

    )
  }

  
}