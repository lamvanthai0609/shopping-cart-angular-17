import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-card.component.html',
})
export class UserCardComponent {}
