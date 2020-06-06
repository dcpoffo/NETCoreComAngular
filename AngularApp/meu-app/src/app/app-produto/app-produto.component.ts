import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './app-produto.component.html',
  styleUrls: ['./app-produto.component.css']
})
export class AppProdutoComponent implements OnInit {

  gostandoDeAngular:boolean = true;
  campo:string = "";
  cor:string = "azul";

  constructor() { }

  ngOnInit(): void {
  }

  mensagem(): void {
    alert(this.campo);
  }

  naoGostoMais(): void {
    this.gostandoDeAngular = !this.gostandoDeAngular;
  }

}
