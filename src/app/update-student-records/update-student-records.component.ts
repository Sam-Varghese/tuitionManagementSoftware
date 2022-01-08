import { Component, OnInit } from '@angular/core';
import { StudentNamesService } from '../services/studentNames.service';
import { ClassNamesService } from '../services/classNames.service';
import { StudentRecordsService } from '../services/student-records.service';


@Component({
  selector: 'app-update-student-records',
  templateUrl: './update-student-records.component.html',
  styleUrls: ['./update-student-records.component.scss'],
})
export class UpdateStudentRecordsComponent implements OnInit {
  studentNamesArray: any = ['Select a class first'];
  classNamesArray: any = ['FClass1', 'FClass2', 'FClass3'];

  classSelected: any;
  studentSelected: any;

  studentDetails: any;

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

  // Methods to show all the information of the student once their name gets selected, in order to make edits
  showInfoForEdits(studentName:string) {
    
    this.studentSelected = studentName;

    this.studentRecordsService
      .getStudentDetails(this.classSelected, this.studentSelected)
      .subscribe((data: any) => {
        console.log(
          `Got the data of ${this.studentSelected} in student-records component.ts`
        );
        this.studentDetails = data;
      });
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
