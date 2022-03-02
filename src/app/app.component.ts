import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];

  transferir($event: any){
    console.log($event);
    //Desconstroi o objeto evendo passando as propriedades(Valor e destino)
    //atraves do "spread operator"
    const transferencia = {...$event, data: new Date() };
    this.transferencias?.push(transferencia);
  }

}
