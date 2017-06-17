import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material Style
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MaterialModule, MdTabsModule, MdProgressSpinnerModule} from '@angular/material';

import {MdDialog, MdDialogModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { ServerService } from './service/server.service';
import { UserService } from './service/user.service';
import { ErrorDialog } from "./service/error.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInDirective } from './directive/logged-in.directive';
import { MenuComponent } from './menu/menu.component';
import { CourseComponent } from './course/course.component';
import { ModuleComponent } from './module/module.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { ModuleDirective } from './directive/module.directive';
import { QuestionComponent } from './question/question.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AddMultiplyChoiceComponent } from './add-multiply-choice/add-multiply-choice.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { StatisticsComponent } from './personal_statistics/statistics.component';
import { RequestModComponent } from './request-mod/request-mod.component';
import { AddQuestionModule } from "./add-question/add-question.module"
import { QuestionModule } from "./question/question.module";
import { ProfilesComponent } from './profiles/profiles.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterComponent } from './register/register.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LoaderComponent } from './loader/loader.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
   component: DashboardComponent
  },
  {
    path: 'dashboard/:id',
   component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "course/:id/:module/:question",
    component: QuestionComponent,
  },
  {
    path: "profile",
    component: ProfilePageComponent
  },
  {
    path: "profile/statistics",
    component: StatisticsComponent
  },
  {
    path: "profiles",
    component: ProfilesComponent,
  },
  {
    path: "admin",
    component: AdminPageComponent
  },
  {
    path: "admin/user_details",
    component: UserDetailComponent,
  },
  {
    path: "admin/request_mod",
    component: RequestModComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoggedInDirective,
    MenuComponent,
    CourseComponent,
    ModuleComponent,
    MultipleChoiceQuestionComponent,
    ModuleDirective,
    QuestionComponent,
    CreateCourseComponent,
    AddMultiplyChoiceComponent,
    AddModuleComponent,
    AddQuestionComponent,
    StatisticsComponent,
    QuestionModule,
    AddQuestionModule,
    ProfilesComponent,
    UserDetailComponent,
    RequestModComponent,
    ProfilePageComponent,
    AdminPageComponent,
    RegisterComponent,
    ErrorMessageComponent,
    LoaderComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    MdTabsModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [
    ServerService,
    UserService,
    CookieService,
    MdDialog,
    ErrorDialog
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    AddModuleComponent,
    AddQuestionModule,
    AddQuestionComponent,
    AddMultiplyChoiceComponent,
    ErrorMessageComponent,
    LoaderComponent,
    CourseComponent,
    CreateCourseComponent,
    // you have to add all modules for questions here
    MultipleChoiceQuestionComponent
  ]
})
export class AppModule { }
