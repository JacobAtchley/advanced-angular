import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivityLogService } from '../core/activity-log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit, OnDestroy {

  public logs:string[] = [];

  private _logSubscription: Subscription;

  constructor(private readonly _activityLogService: ActivityLogService) {

  }

  ngOnDestroy(): void {
    this._logSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._logSubscription = this._activityLogService.activityLog$.subscribe({
      next: (log) => this.logs.push(log)
    })
  }

}
