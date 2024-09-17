import { TestBed } from '@angular/core/testing'

import { TodoSourceService } from './todo-source.service'

describe('TodoSourceService', () => {
  let service: TodoSourceService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TodoSourceService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
