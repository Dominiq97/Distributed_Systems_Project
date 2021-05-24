import { Component, OnInit } from '@angular/core';
import Activity from '../Activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-get',
  templateUrl: './activity-get.component.html',
  styleUrls: ['./activity-get.component.css']
})
export class ActivityGetComponent implements OnInit {

  activities: Activity[];
  constructor(private as: ActivityService) { }

  deleteActivity(id, index) {
    this.as.deleteActivity(id).subscribe(res => {
      this.activities.splice(index, 1);
    });
}

  ngOnInit() {
    this.as
      .getActivities()
      .subscribe((data: Activity[]) => {
        this.activities = data;
      });
  }

}
