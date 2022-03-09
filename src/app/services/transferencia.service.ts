import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any [];

constructor() {
  this.listaTransferencias = [];
}

get transferencia(){
  return this.listaTransferencias;
}

adicionar(transferencia: any){
  //const transferencia = {...$event, data: new Date() };
  this.hidratar(transferencia);
  this.listaTransferencias?.push(transferencia);
}

hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
