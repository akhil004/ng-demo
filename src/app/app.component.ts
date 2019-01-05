import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html', 
})
export class AppComponent  {
    currentUser: User;
    siteUrl: any;
    navigation: string;
    cssUrl: string;
    constructor(
        private router: Router,
        location: PlatformLocation,
        private authenticationService: AuthenticationService,
        public sanitizer: DomSanitizer 
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        location.onPopState(() => {
            console.log('pressed back in add!!!!!');
            //this.router.navigateByUrl('/multicomponent');
            history.forward();
        });
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.siteUrl = e.url.split('/');
                localStorage.setItem('theme',this.siteUrl[1]);
                this.navigation = this.siteUrl[2];
                console.log(this.navigation);
                this.cssUrl = this.siteUrl[1] === 'lori' ? '/assets/css/lori.css' : '/assets/css/synchrony.css';
                if( typeof this.siteUrl[1] === 'undefined' ){
                    this.cssUrl = '/assets/css/lori.css';
                    localStorage.setItem('theme','lori');
                }
            }
          });
        
    }
    
}