import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  clinica:string = 'http://localhost:3000/clinicas'
  constructor(private http:HttpClient) { }

  getLista():Promise<any> {
    return this.http.get(this.clinica)
    .toPromise()
    .then((data:any) => data)   
  }

  getDentistas():Promise<any> {
    return this.http.get(this.clinica)
    .toPromise()
    .then((data:any) => data[0].dentistas)   
  }

  getAgendamentos():Promise<any> {
    return this.http.get(this.clinica)
    .toPromise()
    .then((data:any) => data[0].agendamentos)
  }

}




