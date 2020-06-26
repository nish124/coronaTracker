import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-allcountrycases',
  templateUrl: './allcountrycases.component.html',
  styleUrls: ['./allcountrycases.component.scss']
})
export class AllcountrycasesComponent implements OnInit {
  countryStat: any;
  cols: any[];
  constructor(private getDataService: TestService) { }
  ngOnInit() {
    
    this.getDataService.getCountryStats().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('Country', this.countryStat);
    });

    this.cols = [
      { field: 'country_name', header: 'Country' },
      { field: 'cases', header: 'Cases' },
      { field: 'active_cases', header: 'Active Cases'},
      { field: 'deaths', header: 'Deaths' },
      { field: 'total_recovered', header: 'Recovered' },
      { field: 'new_cases', header: 'New cases today' },
      { field: 'new_deaths', header: 'New deaths today' },
    ];
  }
}
