import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias : any [] = [];

  constructor( private service : TransferenciaService) {
  }

  ngOnInit(): void {
    //this.transferencias = this.service.transferencia;
    //Ao inicializar recebe via GET da API lista de transferencias
    this.service.todas().subscribe((transferencia : Transferencia[]) => {
      console.table(transferencia);
      this.transferencias = transferencia;
    }

    )
  }

}
