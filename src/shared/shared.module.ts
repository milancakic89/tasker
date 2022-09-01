import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth-guard";
import { LocalTaskerService } from "./services/local-tasker.service";
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from "./components/modal/modal.component";
import { CommonModule } from "@angular/common";
import { HeadingComponent } from './components/heading/heading.component';


@NgModule({
  declarations:[
    HeaderComponent,
    ModalComponent,
    HeadingComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, ModalComponent, HeadingComponent],
  providers: [AuthGuard, LocalTaskerService]
})
export class SharedModule {}
