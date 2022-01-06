import { Component, OnInit } from '@angular/core';
import { StudentNamesService } from '../services/studentNames.service';
import { ClassNamesService } from '../services/classNames.service';
import { StudentRecordsService } from '../services/student-records.service';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.scss'],
})
export class StudentRecordsComponent implements OnInit {
  studentNamesArray: any = ['Select a class first'];
  classNamesArray: any = ['FClass1', 'FClass2', 'FClass3'];

  classSelected: any;
  studentSelected: any;

  studentDetails: any;

  showCard: boolean = false;

  // Method to fetch names of student of a particular class immediately after the user selects a class from student-records
  findStudentNamesOfClass(className: string) {
    // set the value of selected class
    this.classSelected = className;

    // Access the student records service to get names of students of the class
    this.studentNamesService
      .getStudentNames(className)
      .subscribe((data: any) => {
        console.log(
          `Got names of students of class ${className} to student-record component sir`
        );
        this.studentNamesArray = data;
      });
  }

  // Method to display the card if the user selected name and class of the student
  displayStudentsCard(studentsName: string) {
    this.studentSelected = studentsName;

    this.studentRecordsService
      .getStudentDetails(this.classSelected, this.studentSelected)
      .subscribe((data: any) => {
        console.log(
          `Got the data of ${this.studentSelected} in student-records component.ts`
        );
        this.studentDetails = data;
      });

    this.showCard = true;
  }

  constructor(
    private studentNamesService: StudentNamesService,
    private classNamesService: ClassNamesService,
    private studentRecordsService: StudentRecordsService
  ) {}

  ngOnInit(): void {
    // Service of fetching names of the class to be automatically called
    this.classNamesService.getClassNames().subscribe((data) => {
      console.log('Got the class names in the student records component sir');
      this.classNamesArray = data;
    });
  }
}
