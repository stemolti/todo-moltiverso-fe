import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../../entities/todo.entity'
import { TodoSourceService } from '../../services/todo-source.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  userId!: string

  @Input()
  todo!: Todo

  @Output() checked = new EventEmitter<[string, boolean, string]>()

  constructor(protected todoSrv: TodoSourceService) {}

  onChange(id: string, event: Event, dueDate: string) {
    const checked = (event.target as HTMLInputElement).checked
    this.checked.emit([id, checked, dueDate])
  }

  assign(userId: string) {
    this.todoSrv.assign(this.todo.id, userId).subscribe((todo) => {
      this.todo = todo
    })
  }
}
