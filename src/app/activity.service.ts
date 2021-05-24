import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  uri = 'http://localhost:4000/activities';

  constructor(private http: HttpClient) { }

  addActivity(ActivityName, ActivityBio, ActivityAge) {
    const obj = {
      ActivityName,
      ActivityBio,
      ActivityAge
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

  updateActivity(ActivityName, ActivityBio, ActivityAge, id) {
    const obj = {
      ActivityName,
      ActivityBio,
      ActivityAge
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