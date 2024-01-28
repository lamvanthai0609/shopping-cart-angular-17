import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { splitArrayIntoChunks } from '@/common';
import { GroupServiceCardComponent } from '@/components/group-service-card';
import { SvgComponent } from '@/components/svg/svg.component';
import { IData, data } from '@/dummy';
import { ChatPipe } from '@/pipe/chat.pipe';
import { TestApiService } from '@/service/test-api.service';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule, SvgComponent, ChatPipe, GroupServiceCardComponent],
    templateUrl: './chat.component.html',
})
export class ChatComponent {
    data: string = '';
    groupServices: IData[][] = [];
    chunkSize: number = 3;

    constructor(private testAPI: TestApiService) {
        this.testAPI.getUsers().subscribe(res => {
            this.data = JSON.stringify(res);
        });
        this.groupServices = splitArrayIntoChunks<IData>(data.data as IData[], this.chunkSize);
        console.log('groupServices', this.groupServices);
    }
}
