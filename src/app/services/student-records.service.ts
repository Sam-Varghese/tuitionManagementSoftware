import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentRecordsService {
  constructor(private http: HttpClient) {}

  // Method to get names of all students of a given class
  getStudentNames(className: any) {
    let url = `http://localhost:5000/getStudentRecords/${className}`;
    let data = this.http.get(url);
    console.log("Got student names from getStudentRecords, sending it to appropriate component");
    return data;
  }
}
