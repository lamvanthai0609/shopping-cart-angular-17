import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SvgComponent } from '@/components/svg/svg.component';
import { ChatPipe } from '@/pipe/chat.pipe';
import { TestApiService } from '@/service/test-api.service';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule, SvgComponent, ChatPipe],
    templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
    data: string = '';
    constructor(private testAPI: TestApiService) {
        this.testAPI.getUsers().subscribe(res => {
            this.data = JSON.stringify(res);
        });
        console.log(this.data);
    }

    ngOnInit(): void {
        console.log('ChatComponent');
    }
}
