import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, map, tap } from 'rxjs'
import { JWTService } from './jwt.service'
import { User } from '../entities/user.entity'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currentUser$ = new BehaviorSubject<User | null>(null)

  currentUser$ = this._currentUser$.asObservable()

  constructor(
    private jwtSrv: JWTService,
    private http: HttpClient,
    private router: Router
  ) {
    this.fetchUser()
  }

  isLoggedIn() {
    return this.jwtSrv.hasToken()
  }

  login(email: string, password: string) {
    return this.http
      .post<{
        user: User
        token: string
      }>(`/api/login`, { email, password })
      .pipe(
        tap((res) => this.jwtSrv.setToken(res.token)),
        tap((res) => this._currentUser$.next(res.user)),
        map((res) => res.user)
      )
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    profilePicture: string
  ) {
    return this.http.post(`/api/register`, {
      firstName,
      lastName,
      email,
      password,
      profilePicture
    })
  }

  logout() {
    this.jwtSrv.removeToken()
    this._currentUser$.next(null)
    this.router.navigate(['/login'])
  }

  private fetchUser() {
    this.http
      .get<User>(`/api/users/me`)
      .subscribe((user) => this._currentUser$.next(user))
  }
}
