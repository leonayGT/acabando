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
  @Input() public index:number = 0
  public agendamentos:Array<any> = new Array()
  public denOcupados:Array<any> = new Array()
  public testeVar:Array<any> = new Array()
  public exibir:boolean = false
  public nomeDentista:any 

  obterDentistasCadastro() {
    this.api.getDentistas().then((den) => {
      this.dentistas = den 
    }) 
 }

teste(){
  this.api.getAgendamentos().then((agen)=>{
    this.testeVar = agen
  })
}
getIdDentista(id:any, dia:any) {
  this.current = id 
  this.diaAgendado = dia.data_hora
}
 
 concluir(idMed:number) {
   this.idAtual.dentistas_disponiveis.forEach((id:number)=> {
    if(idMed == id) {
      this.concluido = true
      console.log('index',this.index)
      this.testeVar[this.index].dentistas_ocupados.push(idMed)
      let index = this.idAtual.dentistas_disponiveis.indexOf(idMed)
      this.idAtual.dentistas_disponiveis.splice(index, 1)
    }
   }) 

  }
   exibirRelatorioOcupado() {
     this.exibir = true
   }
   ocultarrelatorioOcupado() {
     this.exibir = false
   }
   ocultarMsg() {
     this.concluido = false
   }

  constructor(private api:ApiService) { }
  ngOnInit(): void {

    this.obterDentistasCadastro()
   this.teste()
 
  }
  obterDentista(id:number):any {    
    let nome = this.dentistas.find((d)=> {
   // console.log(d)
    return d.identificacao == id ? true : false      
    })

    
    return nome.nome
    
  }
  
}
