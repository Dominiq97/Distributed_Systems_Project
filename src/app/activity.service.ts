import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  uri = 'http://localhost:4000/activities';

  constructor(private http: HttpClient) { }

  addActivity(ActivityName, ActivityBio, ActivityNoParticipants, ActivitySpace, ActivityReport) {
    const obj = {
      ActivityName,
      ActivityBio,
      ActivityNoParticipants,
      ActivitySpace,
      ActivityReport
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getActivities() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editActivity(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateActivity(ActivityName, ActivityBio, ActivityNoParticipants, ActivitySpace, ActivityReport, id) {
    const obj = {
      ActivityName,
      ActivityBio,
      ActivityNoParticipants,
      ActivitySpace,
      ActivityReport
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteActivity(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
