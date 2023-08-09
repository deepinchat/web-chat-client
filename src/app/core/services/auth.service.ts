import { Injectable } from '@angular/core';
import { UserManager } from 'oidc-client';
import { Observable, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends UserManager {
  constructor() {
    super({
      authority: environment.identity.url,
      client_id: environment.identity.clientId,
      redirect_uri: environment.identity.redirectUri,
      silent_redirect_uri: environment.identity.silentRedirectUri,
      post_logout_redirect_uri: environment.identity.postLogoutRedirectUri,
      scope: 'openid profile bss chat identity message',
      response_type: 'id_token token',
      automaticSilentRenew: true
    })
  }

  public getAccessToken(withTokenType = false): Observable<string | undefined> {
    return from(this.getUser())
      .pipe(map(user => user && withTokenType ? `${user.token_type} ${user.access_token}` : user?.access_token));
  }

  public getAccessTokenAsync(withTokenType = false) {
    return this.getUser()
      .then(user => {
        if (user) {
          return withTokenType ? `${user.token_type} ${user.access_token}` : user?.access_token;
        }
        return '';
      });
  }

  public isLoggedIn() {
    return this.getAccessToken().pipe(map(token => !!token));
  }

}
