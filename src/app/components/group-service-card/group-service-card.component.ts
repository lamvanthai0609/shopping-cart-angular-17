import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IData } from '@/dummy';

@Component({
    selector: 'app-group-service-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './group-service-card.component.html',
})
export class GroupServiceCardComponent {
    @Input() groupServices: IData[] = [];
    description?: string;
    serviceIdActive?: number;

    handleClick(data: IData) {
        if (this.serviceIdActive === data.id) {
            this.serviceIdActive = undefined;
            this.description = undefined;
        } else {
            this.description = data.attributes?.short_description || '';
            this.serviceIdActive = data.id;
        }
    }
}
