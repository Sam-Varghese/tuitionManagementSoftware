import { Component, OnInit } from '@angular/core';
import { StudentRecordsService } from '../services/student-records.service';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.scss'],
})
export class StudentRecordsComponent implements OnInit {
  studentNamesArray: any = ['Sam', 'Angel', 'Rahul'];

  constructor(private studentRecordsService: StudentRecordsService) {}

  ngOnInit(): void {
    this.studentRecordsService.getStudentNames('class1').subscribe((data) => {
      console.log('Got names of students to student-record component sir');
      this.studentNamesArray = data;
    });
  }
}
