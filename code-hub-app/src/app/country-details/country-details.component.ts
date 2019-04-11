import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from '../side-list/services/services.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
countriesLink$: Observable<any>;
linkCountryName: string;
  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.countriesLink$ = this.route.paramMap.pipe(
      switchMap( params =>  this.service.getCountryByName(params.get('name')))
    )
  }

}
