import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {
  angForm: FormGroup;
  activity: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private as: ActivityService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ActivityName: ['', Validators.required],
      ActivityBio: ['', Validators.required],
      ActivityAge: ['', Validators.required]
    });
  }

  updateActivity(ActivityName, ActivityBio, ActivityAge) {
    this.route.params.subscribe(params => {
      this.as.updateActivity(ActivityName, ActivityBio, ActivityAge, params.id);
      this.router.navigate(['activities']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.as.editActivity(params[`id`]).subscribe(res => {
        this.activity = res;
      });
    });
  }
}
