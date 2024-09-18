import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { User } from '../../entities/user.entity'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html'
})
export class TodoModalComponent implements OnInit {
  minDate = Date()
  title!: string
  date!: string
  userId!: string
  users: User[] = []

  @Output() addTodo = new EventEmitter<[string, string, string]>()

  constructor(protected userSrv: UserService) {}

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((users) => {
      this.users = users
    })
    this.userId = ''
  }

  add() {
    this.addTodo.emit([this.title, this.date, this.userId])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.title = ''
  }
}
