import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundsDetailPageComponent } from './compounds-detail-page/compounds-detail-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:'compounds/:id',component:CompoundsDetailPageComponent},
  {path:'compounds/edit/:id',component:EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
