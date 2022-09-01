import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalRequest, ModalService } from 'src/shared/components/modal/modal.service';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, public modalService: ModalService, private router: Router) { }

  get user(){ return this.authService.user}

  ngOnInit(): void {
    console.log(this.authService.user)
  }

  public openProject(id: string | number){
    this.router.navigateByUrl(`projects/${id}`);
  }

  public edit($event: any, id: string | number){
    $event.stopPropagation();
    this.router.navigateByUrl(`projects/edit/${id}`);
  }

  public delete($event: any, id: string | number){
    $event.stopPropagation();
    const initialState: ModalRequest = {
      onConfirm: () =>{
        console.log('deleted with id')
      }
    }
    this.modalService.show('delete', 'Are you sure you want to delete?', 'This action can not be undone!', initialState)
  }



}
