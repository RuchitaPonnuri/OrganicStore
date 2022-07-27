import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotnew',
  templateUrl: './forgotnew.component.html',
  styleUrls: ['./forgotnew.component.css']
})
export class ForgotnewComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  user=new User();
  ngOnInit(): void {
  }

  forgotPass(forgotForm:NgForm)
  {
      if(forgotForm.valid)
      {

this.userService.forgotPass(this.user.email,this.user.securityQuestion,this.user.securityAnswer).subscribe(

  data=>{
      if(data!=null){
    alert('data validated');
    this.router.navigate(['/reset']);
  console.log('hello world');  
  localStorage.setItem("email",this.user.email);
  }
    else
    alert('security question or answer didnot match')
  },
  error=>{
    console.log(error)
  }

)


      }

  }
}
