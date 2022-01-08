import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { UpdateStudentRecordsComponent } from './update-student-records/update-student-records.component';

const routes: Routes = [
  {
    path: 'studentRegistrationPortal',
    component: StudentRegistrationComponent,
  },
  { path: 'studentRecords', component: StudentRecordsComponent },
  { path: 'updateStudentRecords', component: UpdateStudentRecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
