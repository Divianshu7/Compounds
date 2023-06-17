import { Component } from '@angular/core';
import { Compound } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeCompounds } from '../fake-data';
import { GetAllService } from '../get-all.service';

@Component({
  selector: 'app-edit-page-form',
  templateUrl: './edit-page-form.component.html',
  styleUrls: ['./edit-page-form.component.css']
})
export class EditPageFormComponent {
  buttonDisabled:boolean=false
  isLoading:boolean=true
  compoundName?:string=''
  compoundDescription?:string=''
  imgSource?:string=''
  imgAttribution?:string=''
  dateModified?:string=''
  compound?:Compound;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private service:GetAllService
  ){}
  ngOnInit():void{
    let id =this.activatedRoute.snapshot.paramMap.get('id')!;
    let idd=parseInt(id)
    // this.compound=fakeCompounds.find(compound=>compound.id===idd)
    this.service.getOneById(idd).subscribe(compound=>{
      this.compound=compound
      this.compoundName=this.compound?.compoundName
      this.compoundDescription=this.compound?.compoundDescription
      this.imgSource=this.compound?.imgSource
      this.imgAttribution=this.compound?.imgAttribution
      this.dateModified=this.compound?.dateModified
      this.isLoading=false
    })
  }
  onSubmit():void{
    this.buttonDisabled=true
    let id =this.activatedRoute.snapshot.paramMap.get('id')!;
    let idd=parseInt(id)
    if(this.compound!=undefined){
      this.compound={
        id:idd,
        compoundDescription:this.compoundDescription!,
        compoundName:this.compoundName!,
        imgAttribution:this.imgAttribution!,
        imgSource:this.imgSource!,
        dateModified:this.dateModified!
      }

      // console.log(this.compound)
      this.service.editOneById(idd,this.compound).subscribe(e=>{
        this.buttonDisabled=false
        this.router.navigateByUrl('')
      })
    }
        
        
    // alert('edited compound')

  }
}
