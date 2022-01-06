import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentNamesService {
  constructor(private httpClient: HttpClient) {}

  // Method to get names of all students of a given class
  getStudentNames(className: any) {
    let url = `http://localhost:5000/getStudentNames/${className}`;
    let data = this.httpClient.get(url);
    console.log(
      'Got student names from getStudentRecords, sending it to appropriate component'
    );
    return data;
  }
}
