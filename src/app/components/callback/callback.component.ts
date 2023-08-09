import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-callback',
  template: `
            <div>
              Redirecting...
            </div>`
})
export class CallbackComponent implements OnInit {
  type?: string | null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.route.paramMap.subscribe(p => {
      if (p.has('type')) {
        this.type = p.get('type');
      }
    });
  }

  ngOnInit() {
    switch (this.type) {
      case 'signin':
        this.authService.signinCallback()
          .then(res => {
            if (res.state?.returnUrl) {
              this.router.navigateByUrl(res.state.returnUrl)
            } else {
              this.router.navigate(['/']);
            }
          });
        break;
      case 'silent':
        this.authService.signinSilentCallback()
          .then(res => {
            console.log('silent signin successfuly.');
          });
        break;
    }
  }
}
