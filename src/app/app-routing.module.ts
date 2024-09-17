import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TodoListComponent } from './pages/todo-list/todo-list.component'
import { authGuard } from './guards/auth.guard'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: TodoListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
