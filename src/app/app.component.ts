import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { LayoutComponent } from './layout/layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, LayoutComponent, TranslateModule],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'shopping-cart';
    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'vi']);
        translate.setDefaultLang('vi');

        // const browserLang: string = translate.getBrowserLang() ?? 'vi';
        // translate.use(browserLang.match(/en|vi/) ? browserLang : 'vi');
    }
}
