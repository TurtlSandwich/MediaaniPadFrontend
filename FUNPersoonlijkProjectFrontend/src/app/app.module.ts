import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './projects/project/project.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { TaskComponent } from './tasks/task/task.component';
import { StateComponent } from './states/state/state.component';
import { RoleComponent } from './roles/role/role.component';
import { CategoryComponent } from './categories/category/category.component';

const appRoutes: Routes = [
  {path: "register", component:RegisterComponent },
  {path: "login", component:LoginComponent },
  {path: "project", component:ProjectComponent },
  {path: "meeting", component:MeetingComponent },
  {path: "task", component:TaskComponent },
  {path: "state", component:StateComponent },
  {path: "role", component:RoleComponent },
  {path: "category", component:CategoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
