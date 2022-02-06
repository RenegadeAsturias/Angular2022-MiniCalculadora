import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mini Calculadora';
  numero1:number = 100;
  numero2:number = 11;
  resultado:number = 0;

  sumar():void{
    console.log("sumar! "+this.numero1+" + "+this.numero2+" = "+this.resultado);
    this.resultado=this.numero1+this.numero2;
  }

  restar():void{
    console.log("restar! "+this.numero1+" - "+this.numero2+" = "+this.resultado);
    this.resultado=this.numero1-this.numero2;
  }

}
