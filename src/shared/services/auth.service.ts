import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";
import { LocalTaskerService } from "./local-tasker.service";

export interface User{
  projects: ProjectInfo[];
}

export interface ProjectInfo {
  id: string | number;
  name: string;
  short_description: string;
  description: string;
  dashboard: any[];
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private localTaskerService: LocalTaskerService, private http: HttpService, private router: Router){
    this._userSubject = new BehaviorSubject<any>(null);
    if (localStorage.getItem('tasker-logged')){
       this.loginLocaly();
       this._autologin.next(true)
    }
  }

  get loggedLocaly(): boolean {return this._loggedLocaly};
  set loggedLocaly(value: boolean) {this._loggedLocaly = value}

   get isAuthenticated(): boolean {return this._userSubject.value !== null}

  get autoLoginAvailable(){
    return this._autologin.asObservable();
  }

  get user(): User { return this._userSubject.value }
  set user(value: User) { this._userSubject.next(value)}

  public loginLocaly(){
    localStorage.setItem('tasker-logged', 'true')
    if(localStorage.getItem('tasker-user')){
       this.user = JSON.parse(localStorage.getItem('tasker-user') || '')
    }else{
       this.user = this.localTaskerService.newUser;
      localStorage.setItem('tasker-user', JSON.stringify(this.user))
    }
    this.loggedLocaly = true;
  }

  public login(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
  }

  private _autologin = new BehaviorSubject<boolean>(false);
  private _userSubject: BehaviorSubject<User>;
  private _loggedLocaly = false;
}
