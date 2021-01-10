import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../servises/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent   {
  username = '';
  password = '';
  constructor(private authServise: AuthService, 
    private router: Router,
    ) { }

  validateLogin(){
    this.authServise.getUserId(this.username, this.password).subscribe(
      (data: {userId, token}) =>{
        this.router.navigate([`${data.userId}`])
      }, error => console.log('ERROR', error)
    )
  }

}
