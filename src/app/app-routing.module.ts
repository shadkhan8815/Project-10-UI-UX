import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CollegeListComponent } from './college/college-list.component';
import { UserListComponent } from './user/user-list.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { RoleListComponent } from './role/role-list.component';


const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo:'welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
path : 'dashboard',
component:DashboardComponent
  },
  {
  path : 'role',
  component : RoleComponent
},
{
  path : 'roleList',
  component : RoleListComponent
},
{
  path : 'user',
  component: UserComponent
},
{
  path : 'userList',
  component: UserListComponent
},
{
  path : 'college',
  component:CollegeComponent
},
{
  path : 'collegeList',
  component:CollegeListComponent
},
{
  path : 'course',
  component:CourseComponent
  },
  {
    path : 'courseList',
    component:CourseListComponent
  },
  {
    path : 'faculty',
component:FacultyComponent
  },
  {
    path: 'facultyList',
    component: FacultyListComponent
  },
  {
    path : 'footer',
    component: FooterComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'signup',
    component:SignUpComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'marksheetList',
    component: MarksheetListComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'studentList',
    component: StudentListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subjectList',
    component: SubjectListComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'timetableList',
    component: TimetableListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
