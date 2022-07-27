import { Component, OnInit } from '@angular/core';
import { User } from 'src/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private userService:UserService) { }
  user=new User();
  ngOnInit(): void {
  }

  registerMe(regForm: { valid: any; })
  {
   console.log(this.user);
   if(regForm.valid)
   {
   
   this.userService.registerUser(this.user).subscribe(
   
   data=>{
     alert('user registered')
   },
   error=>{
     console.log(error)
   }
   
   )
   
   }
   else
   {
     alert('something went wrong');
   }
   
     }
   
   
}
