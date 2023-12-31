import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, mergeMap, tap } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.getAccessToken(true)
            .pipe(mergeMap(token => {
                if (!!token) {
                    req = req.clone({
                        setHeaders: {
                            Authorization: token
                        }
                    });
                }
                return next.handle(req);
            }))
            .pipe(tap({
                next(value) {
                    return value;
                },
                error: (error: any) => {
                    if (error instanceof HttpErrorResponse) {
                        console.error(error);
                    }
                }
            }));
    }
}