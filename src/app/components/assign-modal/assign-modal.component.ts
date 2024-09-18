import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../entities/user.entity'

@Component({
  selector: 'app-assign-modal',
  templateUrl: './assign-modal.component.html'
})
export class AssignModalComponent implements OnInit {
  userId!: string
  users: User[] = []

  constructor(protected userSrv: UserService) {}

  @Output() assignTodo = new EventEmitter<string>()

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((users) => {
      this.users = users
    })
  }

  assign() {
    this.assignTodo.emit(this.userId)
  }
}
