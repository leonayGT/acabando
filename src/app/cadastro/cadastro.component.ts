import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public clinica:any
  @Input() public current:number = 0
  @Input() public dentistas:Array<any> = new Array()
  @Input() public diaAgendado:Date = new Date()
  @Input() public idAtual:any
  @Input() public concluido:boolean = false

  obterDentistasCadastro() {
    this.api.getDentistas().then((den) => {
      this.dentistas = den  
       
    }) 
 }


 concluir(cur:number) {
   this.idAtual.forEach((o:number)=> {
    if(cur == o) {
      this.idAtual.pop(cur)
      this.concluido = true
    }
   }) 
  
   }
 
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.obterDentistasCadastro()
  }

}
