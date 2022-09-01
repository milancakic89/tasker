import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { LocalTaskerService } from 'src/shared/services/local-tasker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.autoLoginAvailable.subscribe(bool => {
      if(bool){
        this.router.navigateByUrl('');
      }
    })
  }

  public loginLocaly(){
    this.authService.loginLocaly();
    this.router.navigateByUrl('');
  }
}
