import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentRecordsService {
  constructor(private httpClient: HttpClient) {}

  // Method to get the details of a student of a given class
  getStudentDetails(className: string, studentName: string) {
    // Replacing all the spaces before making a request
    // studentName = studentName.replace(' ', '%');
    // className = className.replace(' ', '%');

    let url = `http://localhost:5000/getStudentRecords/${studentName}/${className}`;
    let data = this.httpClient.get(url);
    console.log(
      `Got the details of ${studentName} in the student-records service.`
    );
    return data;
  }
}
