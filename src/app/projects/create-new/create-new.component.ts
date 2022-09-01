import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, ProjectInfo } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  get user() { return this.authService .user}
  get project(){return this._project}

  public isEditMode = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']){
        this.isEditMode = true;
        this.user.projects.filter(project => {
          if(project.id === parseInt(params['id'])){
            this._project = project;
          }
        })
      }
    })
  }

  private _project: ProjectInfo = {
    id: '',
    name: '',
    short_description: '',
    description: '',
    dashboard: []
  }
}
