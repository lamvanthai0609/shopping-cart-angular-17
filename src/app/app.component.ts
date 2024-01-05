import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, LayoutComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'shopping-cart';
}
