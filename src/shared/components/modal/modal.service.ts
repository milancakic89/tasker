import { EventEmitter, Injectable } from "@angular/core";

export interface ModalData{
  message: string;
  heading: string;
  modal: Modal;
  [key: string]: any;
}

export interface ModalRequest{
  requestData?: any;
  response?: any;
  onConfirm: () => any;
  onClose?: () => any;
}

export type Modal = 'delete' | '';

@Injectable({providedIn: 'root'})
export class ModalService{

  public modal = new EventEmitter<ModalData>();

  public show(modal: Modal, heading: string, message: string, modalState: ModalRequest){
    this.modal.emit({ modal, heading, message, modalState })
  }

  public hide(){
    this.modal.emit({ modal: '', heading: '', message: '' })
  }

  public confirm(modalState: ModalRequest){
    modalState.onConfirm();
    this.hide();
  }

  public cancel(){
    this.hide();
  }


}
