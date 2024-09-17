import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Todo } from '../entities/todo.entity'
import { isExpired } from '../utils/is-expired'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoSourceService {
  constructor(protected http: HttpClient) {}

  fetch(showCompleted: boolean) {
    return this.http.get<Todo[]>(`/api/todos`, {
      params: { showCompleted: showCompleted }
    })
  }

  add(title: string, dueDate: string, userId: string): Observable<Todo> {
    if (userId == '')
      return this.http.post<Todo>(`/api/todos`, { title, dueDate })
    else
      return this.http.post<Todo>(`/api/todos`, {
        title,
        dueDate,
        assignedTo: userId
      })
  }

  check(id: string, checked: boolean, dueDate: string): Observable<Todo> {
    if (checked) {
      return this.http.patch<Todo>(`/api/todos/${id}/check`, {
        completed: checked,
        expired: false
      })
    } else {
      return this.http.patch<Todo>(`/api/todos/${id}/uncheck`, {
        completed: checked,
        expired: isExpired(dueDate)
      })
    }
  }

  assign(id: string, userId: string): Observable<Todo> {
    return this.http.patch<Todo>(`/api/todos/${id}/assign`, { userId })
  }
}
