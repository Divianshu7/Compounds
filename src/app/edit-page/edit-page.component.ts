import { Component } from '@angular/core';
import { Compound } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllService } from '../get-all.service';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent {
  compoundName:string=''
  compoundDescription:string=''
  imgSource:string=''
  imgAttribution:string=''
  dateModified:string=''
  compound?:Compound;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
    ,private service:GetAllService
  ){}
  ngOnInit():void{
    let id =this.activatedRoute.snapshot.paramMap.get('id')!;
    let idd=parseInt(id)
    // this.compound=fakeCompounds.find(compound=>compound.id===idd)
    this.service.getOneById(idd).subscribe(compound=>this.compound=compound)
  }
  onSubmit():void{
    alert('edited compound')
    this.router.navigateByUrl('')
  }
}
