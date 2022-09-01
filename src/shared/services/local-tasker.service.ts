import { Injectable } from "@angular/core";

@Injectable()
export class LocalTaskerService {

  get newUser(){ return this._user }



  private _user = {
    projects: [
      {
        id: 0,
        name: 'My first project',
        short_description: 'Edit me by clicking on edit button',
        description: 'This is some description',
        dashboard: []
      }
    ]
  }


}
