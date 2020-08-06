import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../shared/selected-data.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit{
  loading = true;
  cols = [];
  myList: any []= [];
  constructor(private sharedDataService: SelectedDataService) { }
  ngOnInit() {

    this.cols = [
      { field: 'country_name', header: 'Country' },
      { field: 'cases', header: 'Cases' },
      { field: 'active_cases', header: 'Active Cases'},
      { field: 'deaths', header: 'Deaths' },
      { field: 'total_recovered', header: 'Recovered' },
      { field: 'new_cases', header: 'New cases today' },
      { field: 'new_deaths', header: 'New deaths today' },
    ];
 this.myListCall();
  }

  myListCall(){
    this.sharedDataService.selectedData$.subscribe(message => {
    //debugger;
    // console.log(message);
     this.myList= message;
     console.log(this.myList);
     });
  }
}
