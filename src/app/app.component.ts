import { Location } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { navigation } from 'src/shared/config/navigation';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private auth: AuthService){}

  get navigation() { return navigation };
  get isAuthenticated(){
    return this.auth.isAuthenticated
  }

  public isNavOpen = true;

  public openNav($event: any){
    $event.preventDefault();
  }
}
