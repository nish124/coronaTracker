import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { SelectedDataService } from '../shared/selected-data.service'
import { send } from 'process';
@Component({
  selector: 'app-allcountrycases',
  templateUrl: './allcountrycases.component.html',
  styleUrls: ['./allcountrycases.component.scss']
})
export class AllcountrycasesComponent implements OnInit {
  countryStat: any;
  cols: any[];
  selectedRow:any[];
  selectedRowCheck=false;
  dailyReport:any;

  constructor(private getDataService: TestService,private sharedDataService: SelectedDataService) { }
 
  ngOnInit() {
    this.getDataService.getCountryStats().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('Country', this.countryStat);
    });

    this.getDataService.getDailyReport().subscribe((res: any) => {
      this.dailyReport=res;
      console.log('Daily Report', this.dailyReport);
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
  
  onRowSelect(eventData: any) {
  console.log(this.selectedRow);
  //console.log('Selected Data : ', eventData);
  }
  onRowUnselect(eventData: any) {
  // simply logging the event
 // console.log('UnSelected Data : ', eventData);
  }
  sendRowData(selectedRow:any){
    this.sharedDataService.sendData(this.selectedRow);
  } 
}