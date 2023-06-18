import { Component } from '@angular/core';
import { Compound } from '../types';
import { GetAllService } from '../get-all.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  isLoading:boolean=true
  p:any
  currentPage:number=1
  changePage(page:number):void{
    this.currentPage=page
  }
  compounds:Compound[]=[];
  constructor(
    private getAllService:GetAllService
  ){}
  ngOnInit():void{
    this.getAllService.getAll().subscribe(compounds=>{
      this.compounds=compounds
      this.isLoading=false
    })
  }
}
