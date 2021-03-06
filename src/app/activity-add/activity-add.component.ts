import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private as: ActivityService, private router: Router, ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ActivityName: ['', Validators.required],
      ActivityBio: ['', Validators.required],
      ActivityNoParticipants: ['', Validators.required],
      ActivitySpace: ['', Validators.required],
      ActivityReport:['']
    });
  }

  addActivity(ActivityName, ActivityBio, ActivityNoParticipants, ActivitySpace, ActivityReport) {
    this.as.addActivity(ActivityName, ActivityBio, ActivityNoParticipants, ActivitySpace, ActivitySpace/ActivityNoParticipants);
    this.router.navigate(['activities']);
  }

  ngOnInit(): void {
  }

}
