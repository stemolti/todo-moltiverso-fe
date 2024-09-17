import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../entities/user.entity'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() user: User | null = null

  @Output() logoutEvent = new EventEmitter<void>()

  constructor(protected userSrv: UserService) {}

  logout() {
    this.logoutEvent.emit()
  }
}
