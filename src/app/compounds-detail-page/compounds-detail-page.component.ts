import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compound } from '../types';
import { GetAllService } from '../get-all.service';

@Component({
  selector: 'app-compounds-detail-page',
  templateUrl: './compounds-detail-page.component.html',
  styleUrls: ['./compounds-detail-page.component.css']
})
export class CompoundsDetailPageComponent implements OnInit {
  compound?:Compound;
  isLoading:boolean=true
  constructor(
    private getAllService:GetAllService,
    private route:ActivatedRoute,
  ){}
  ngOnInit():void{
    let id =this.route.snapshot.paramMap.get('id')!;
    let idd=parseInt(id)
    this.getAllService.getOneById(idd).subscribe(compound=>{
      this.compound=compound
      this.isLoading=false
    })
  }
}
