import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoListComponent } from './pages/todo-list/todo-list.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TodoService } from './services/todo.service'
import { FooterComponent } from './components/footer/footer.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthInterceptor } from './utils/auth.interceptor'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegisterComponent } from './pages/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FooterComponent,
    LoginComponent,
    IfAuthenticatedDirective,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
