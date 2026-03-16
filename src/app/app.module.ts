import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpServiceService } from './http-service.service';
import { AuthServiceService } from './auth-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './login/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    UserComponent,
    CollegeComponent,
    CollegeListComponent,
    RoleListComponent,
    UserListComponent,
    CourseComponent,
    CourseListComponent,
    DashboardComponent,
    FacultyComponent,
    FacultyListComponent,
    FooterComponent,
    LoginComponent,
    MarksheetComponent,
    MarksheetListComponent,
    NavbarComponent,
    StudentComponent,
    StudentListComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    TimetableListComponent,
    WelcomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
   
   
  ],
  providers: [
    HttpServiceService,
    AuthServiceService,
    EndpointServiceService,
    ServiceLocatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
