import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/Article.model';
import { NewsService } from '../news.service';
import { Favourite } from 'src/Favourite.model';
import { FavouriteService } from '../FavouriteService';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  

  constructor(private news:NewsService,private favouriteService:FavouriteService,private router:Router,private actRoute:ActivatedRoute) { }
     
     username=''
  ngOnInit(): void {
    this.getNewsHeadLInes();
    this.actRoute.params.subscribe(
      data=>{
        this.username=data['userId']
      },
      error=>{
        console.log(error)
      }
      
    )
      
  }

 
  favourites:Favourite[]=[];
   favourite=new Favourite();
  articles:Article[]=[];
  article=new Article();


  getNewsHeadLInes()
  {

    this.news.getHeadlines().subscribe(
data=>{

  let news= JSON.parse(JSON.stringify(data));


 for(let i=0; i< 5;i++ )
 {
let article=new Article();
article.author=news.articles[i].author;
article.description=news.articles[i].description;
article.title=news.articles[i].title;
article.url=news.articles[i].url;
article.urlToImage=news.articles[i].urlToImage;
this.articles.push(article);
 }


 

},

error=>{
  console.log(error)
}

    )
  }

  category=''

  getCategoryNewsHeadLInes()
  {

    this.news.getCategoryHeadlines(this.category).subscribe(
data=>{
  let news= JSON.parse(JSON.stringify(data));

 this.articles=[];
 for(let i=0; i<5 ;i++ )
 {
let article=new Article();
article.author=news.articles[i].author;
article.description=news.articles[i].description;
article.title=news.articles[i].title;
article.url=news.articles[i].url;
article.urlToImage=news.articles[i].urlToImage;
this.articles.push(article);
 }

 

},
error=>{
  console.log(error)
}

    )
  }

search=''

searchNewsHeadLInes()
{

  this.news.getSearchHeadlines(this.search).subscribe(
data=>{

let news= JSON.parse(JSON.stringify(data));


this.articles=[];
for(let i=0; i<5;i++ )
{
let article=new Article();
article.author=news.articles[i].author;
article.description=news.articles[i].description;
article.title=news.articles[i].title;
article.url=news.articles[i].url;
article.urlToImage=news.articles[i].urlToImage;
this.articles.push(article);
}



},
error=>{
console.log(error)
}

)


}

backHome(){
  this.router.navigate(['/login'])
}

addtofav(article:Article){
  this.favourite.username=this.username;
  this.favourite.url=article.url;
  this.favourite.title=article.title;
  this.favourite.urlToImage=article.urlToImage;
  this.favourite.description=article.description;
  this.favourite.author=article.author;
  //this.favourite.username=localStorage.getItem('username')+'';
  
  
  console.log(this.favourite);

  this.favouriteService.addtofavourite(this.favourite).subscribe(
    data=>{
      alert("Add To Favourites")
    },
    error=>{
      console.log(error)
    }
  )
}
 

  
}