import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  private readonly _activityLogSubject = new Subject<string>();

  public activityLog$ = this._activityLogSubject.asObservable();

  constructor() { }

  public logActivity(log: string){
    this._activityLogSubject.next(log);
  }
}
