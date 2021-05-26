import { Component, OnInit } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
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
public primaryXAxis: Object;
public chartData: Object[];
public primaryYAxis: Object;
public legendSettings: Object;
public tooltip: Object;
public title: string;
public marker: Object;


  ngOnInit() {
    this.as
      .getActivities()
      .subscribe((data: Activity[]) => {
        this.activities = data;
        this.chartData = this.activities;
        console.log(this.chartData)
      });
    this.tooltip = {
      enable: true
    }

    this.primaryYAxis = {
      labelFormat: '{value} Participant/m^2'
    };
    this.marker = {
      dataLabel:{
          visible: true
      }
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Activities report';

    this.primaryXAxis = {
        valueType: 'Category'
    };
  }
}
