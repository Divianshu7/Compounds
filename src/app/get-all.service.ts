import { Injectable } from '@angular/core';
import { Compound } from './types';
import {Observable}from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(
    private http:HttpClient
  ) { }
  getAll():Observable<Compound[]>{
    return this.http.get<Compound[]>('https://compounds-backend.onrender.com/api/all') ;
  }
  getOneById(id:Number):Observable<Compound>{
    return this.http.get<Compound>(`https://compounds-backend.onrender.com/api/find/${id}`)
  }
  editOneById(id:Number,editedCompound:Compound):Observable<Compound>{
    return this.http.post<Compound>(`https://compounds-backend.onrender.com/api/edit/${id}`,editedCompound,httpOptions)
  }

}
