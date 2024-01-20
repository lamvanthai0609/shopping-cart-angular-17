import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './chat.component.html',
})
export class ChatComponent {}
