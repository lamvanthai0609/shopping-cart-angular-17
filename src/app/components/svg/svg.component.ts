import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './svg.component.html',
})
export class SvgComponent {
    @Input() icon!: string;
}
