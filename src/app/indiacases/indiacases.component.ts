import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-indiacases',
  templateUrl: './indiacases.component.html',
  styleUrls: ['./indiacases.component.scss']
})
export class IndiacasesComponent implements OnInit {

  indiaStatCases: any;
  cols: any[];

  constructor(private getDataService: TestService) { }
  ngOnInit() {
    this.getDataService.getIndiaStatCases().subscribe((res) => {
      this.indiaStatCases = res;
      console.log('India', this.indiaStatCases);
    });
    
    this.cols = [
      { field: 'name', header: 'State Name' },
      { field: 'cases', header: 'Total Cases' },
      { field: 'recovered', header: 'Recovered Cases' },
      { field: 'deaths', header: 'Total Deaths' },
    ];
  }
}
