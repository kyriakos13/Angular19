import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {
countries: any;
countryName: any;
countriesLink$: Observable<any>;
selectedId: string;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.countries = this.service.getCountries().subscribe(data=> this.countries = data);
    this.countryName = this.service.getCountryByName('athens').subscribe(data=> this.countryName = data);
  }

}
