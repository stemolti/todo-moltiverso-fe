import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, catchError, takeUntil, throwError } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    email: ['', { validators: Validators.required }],
    password: ['', { validators: Validators.required }]
  })

  loginError = ''

  private destroyed$ = new Subject<void>()

  constructor(
    protected fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.loginError = ''
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value
      this.authSrv
        .login(email!, password!)
        .pipe(
          catchError((err) => {
            this.loginError = err.error.message
            return throwError(() => err)
          })
        )
        .subscribe(() => {
          this.router.navigate(['/'])
        })
    }
  }
}
