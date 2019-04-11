import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideListComponent } from './side-list/side-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {
    path: 'regions',
    component: SideListComponent,
    children: [{
      path: 'details/:name',
      component: CountryDetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
