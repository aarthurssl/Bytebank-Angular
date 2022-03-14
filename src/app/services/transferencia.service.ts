import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencias.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any [];
  //Caminho JSON
  private url = 'http://localhost:3000/transferencias';

//Httpclient prove metodos que façam requisições para uma API REST
constructor(private httpClient: HttpClient) {
  this.listaTransferencias = [];
}

get transferencia(){
  return this.listaTransferencias;
}

//Função que realiza chamada na API tipando para receber uma lista de transferencias
todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionar(transferencia: any){
  //Desconstruindo obj $event
  //const transferencia = {...$event, data: new Date() };
  this.hidratar(transferencia);
  this.listaTransferencias?.push(transferencia);
}

hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
