import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
    templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
    isShowLayout: boolean = true;
    blackListOfShowLayout: string[] = ['/auth/register', '/auth/login'];
    constructor(private router: Router) {}
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isShowLayout = !this.blackListOfShowLayout.includes(event.urlAfterRedirects);
            }
        });
    }
}
