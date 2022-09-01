import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CreateNewComponent } from "./create-new/create-new.component";
import { FormComponent } from "./form/form.component";

const routes: Route[] = [
  { path: 'new', component: CreateNewComponent },
  { path: 'edit/:id', component: CreateNewComponent },
  { path: ':id', component: FormComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule{}
