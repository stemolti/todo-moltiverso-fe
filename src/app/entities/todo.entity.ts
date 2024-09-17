import { User } from '../entities/user.entity'

export interface Todo {
  id: string
  title: string
  dueDate: string
  completed: boolean
  expired: boolean
  createdBy: User
  assignedTo?: User
}
