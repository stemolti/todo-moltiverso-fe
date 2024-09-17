import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { TodoListComponent } from './pages/todo-list/todo-list.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TodoSourceService } from './services/todo-source.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FooterComponent } from './components/footer/footer.component'
import { TodoModalComponent } from './components/todo-modal/todo-modal.component'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthInterceptor } from './utils/auth.interceptor'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { AssignModalComponent } from './components/assign-modal/assign-modal.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegisterComponent } from './pages/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    FooterComponent,
    TodoModalComponent,
    DatepickerComponent,
    LoginComponent,
    IfAuthenticatedDirective,
    AssignModalComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    TodoSourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
