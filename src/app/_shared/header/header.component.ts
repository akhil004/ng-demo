import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { getDetails, getUrl } from '@app/utils';
import { Details } from '@app/_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  theme: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }
  logout() {
    this.authenticationService.logout();
    this.theme = getUrl();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.theme = getUrl();
  }

}
