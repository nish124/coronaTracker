import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {

  private _getDataSelectedData = new Subject<any>();
  selectedData$ = this._getDataSelectedData.asObservable();

  constructor() {
    }
    sendData(data: any){
      this._getDataSelectedData.next(data);
    }

}