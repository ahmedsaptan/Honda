import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'contactus', component: ContactUsComponent},
  {path: '', component: CarouselComponent},
  {path: ':name', component: CarDetailsComponent},
  {path: '**', component: ErrorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
