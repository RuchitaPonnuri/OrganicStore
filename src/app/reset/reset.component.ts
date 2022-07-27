import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  user=new User();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('email');
  }

  email:any='';


  resetPass(resetForm:NgForm)
  {

      if(resetForm.valid)
      {
this.user.email=this.email;
this.userService.resetPass(this.user).subscribe(
  data=>{
    alert('password changed');
  },
  error=>{
    console.log(error);
  }
)

      }
      
  }
}
