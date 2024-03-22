import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { SvgComponent } from '@/components/svg/svg.component';
import { UserCardComponent } from '@/components/user-card/user-card.component';
import { ChatPipe } from '@/pipe/chat.pipe';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule, SvgComponent, ChatPipe, UserCardComponent, TranslateModule],
    templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
    data: string = '';
    constructor() {}

    ngOnInit(): void {
        console.log('ChatComponent');
    }
}
