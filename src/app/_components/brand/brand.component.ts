import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { getUrl } from '@app/utils';
import { User, Brand } from '@app/_models';
import { UserService, AuthenticationService, BrandService, DeviceService } from '@app/_services';

@Component({ templateUrl: 'brand.component.html' })
export class BrandComponent implements OnInit, OnDestroy {
    currentUser: User;
    theme: string;
    currentUserSubscription: Subscription;
    url: string;
    users: User[] = [];
    brands: Brand[] = [];
    manufacturerName: string;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private brandService: BrandService,
        private router: Router,
        private deviceService: DeviceService,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllBrands();
        this.theme = getUrl();
        
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    private loadAllBrands() {
        this.brandService.getAll().pipe(first()).subscribe(brands => {
            this.brands = brands['content'];
        })
    }
    
    selectBrand(manufacturerName){
        this.deviceService.storeManufactureName(manufacturerName);
        this.router.navigate([this.theme+'/device'])
    }
}