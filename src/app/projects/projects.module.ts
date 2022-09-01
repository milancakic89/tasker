import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateNewComponent, FormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProjectsModule { }
