import { Component } from '@angular/core';
import { ActivityLogService } from './core/activity-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private readonly _logService: ActivityLogService){ }

  public log(log: string){
    this._logService.logActivity(log);
  }
}
