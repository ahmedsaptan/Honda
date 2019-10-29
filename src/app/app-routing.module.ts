import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path: 'contactus', component: ContactUsComponent},
  {path: '', component: CarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
