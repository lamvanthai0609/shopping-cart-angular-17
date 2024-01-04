import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    isShowHeader: boolean = true;
    blackListOfShowHeader: string[] = ['/auth/register', '/auth/login'];
    constructor(private router: Router) {}
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isShowHeader = !this.blackListOfShowHeader.includes(event.urlAfterRedirects);
            }
        });
    }
}
