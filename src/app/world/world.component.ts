import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  globalStat: any;
  colsGlobal: any[];
  constructor(private getDataService: TestService) { }

  ngOnInit() {
    
    this.getDataService.getGlobalStats().subscribe((res) => {
      this.globalStat = res;
      console.log('World', this.globalStat);
    });

    this.colsGlobal = [
      { field: 'total_cases', header: 'Total Cases' },
      { field: 'new_cases', header: 'New Cases' },
      { field: 'active_cases', header: 'Active Cases' },
      { field: 'new_deaths', header: 'New deaths' },
      { field: 'total_recovered', header: 'Total recovered' },
      { field: 'total_deaths', header: 'Total deaths' },
    ];    
}
}
