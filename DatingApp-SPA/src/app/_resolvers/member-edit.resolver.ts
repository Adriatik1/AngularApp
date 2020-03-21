import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/Auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private userService: UserService, private router: Router,
                private authService: AuthService, private alertify: AlertifyService ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem with retrieving your data!');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
