import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia-component.html',
    styleUrls:['./nova-transferencia-component.scss']

})
export class NovaTransferenciaComponent {
  /* Decorator que marca um campo de uma classe como propriedade de saida
  a propriedade vinculada com a propriedade de saida é automaticamente atualizada
  ao detectar auteração  */
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    //emit é usado para emitir um evendo customizado
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
