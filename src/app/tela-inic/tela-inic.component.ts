import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tela-inic',
  templateUrl: './tela-inic.component.html',
  styleUrls: ['./tela-inic.component.css']
})
export class TelaInicComponent implements OnInit {

  public clinicaTotal:Array<any> = new Array()
  public dentistas:Array<any> = new Array()
  public allID: number = 0
  public agendamentos:Array<any> = new Array()
  public dentistasTeste:Array<any> = new Array()
  public dentistasOcu:Array<any> = new Array()
  
  @Input() public idDentista:number = 0
  @Input() public diaAgendamento:any 
  @Input() public dentistasDisponiveis:number = 0
  @Input() public agendamentoID:any
  @Input() public naoConcluido:boolean = false 
  @Input() public index:number = 0
  public agendamentoCancel: any

  getIdDentista(id:number, dia:any,i:number) {
    this.idDentista = id 
    this.diaAgendamento = dia.data_hora  
    this.agendamentoID = dia
    this.naoConcluido = false
    console.log(this.idDentista);
    
    this.index = i
  }


  getClinicaTotal() {   
    this.clinica.getLista().then((cli:any) =>{
    this.clinicaTotal = cli
    this.dentistas = cli[0].dentistas
    this.agendamentos = cli[0].agendamentos
    let marreta = {value:''}   
    this.getAllDestistas(marreta)
    //console.log(this.agendamentos)
    })
  }

 getAllDestistas(id:any){
    if( id.value == "") {
      this.agendamentos = this.clinicaTotal[0].agendamentos
      } else {
        this.agendamentos = this.clinicaTotal[0].agendamentos.filter((agen:any) => {
          let retorno = false
          agen.dentistas_disponiveis.forEach((med:number) => {
          if (med == id.value) {
            retorno = true
           // console.log(med)
            }
          })               
          return retorno
        })      
      }      
  }




 obterDentista(id:number):any {    
    let nome = this.dentistas.find((d)=> {
   // console.log(d)
    return d.identificacao == id ? true : false      
    })
    return nome.nome
  }

  constructor(private clinica:ApiService) { }

  ngOnInit(): void {
    this.getClinicaTotal()
 
  }
}
