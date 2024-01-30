import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, NgIterable, ViewChild } from '@angular/core';

import {
    NguCarousel,
    NguCarouselConfig,
    NguCarouselDefDirective,
    NguItemComponent,
    NguCarouselNextDirective,
} from '@ngu/carousel';

import { SvgComponent } from '@/components/svg/svg.component';
import { ChatPipe } from '@/pipe/chat.pipe';
import { TestApiService } from '@/service/test-api.service';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [
        CommonModule,
        SvgComponent,
        ChatPipe,
        NguCarousel,
        NguItemComponent,
        NguCarousel,
        NguCarouselDefDirective,
        NguItemComponent,
        NguCarouselNextDirective,
    ],
    templateUrl: './chat.component.html',
})
export class ChatComponent implements AfterViewInit {
    data: string = '';

    name = 'Angular';
    slideNo = 0;
    withAnim = true;
    resetAnim = true;

    @ViewChild('myCarousel') myCarousel!: NguCarousel<unknown, NgIterable<unknown>>;
    carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: 3,
        interval: { timing: 4000, initialDelay: 1000 },
        loop: true,
        touch: true,
        velocity: 0.2,
    };
    carouselItems = [1, 2, 3];
    constructor(
        private testAPI: TestApiService,
        private cdr: ChangeDetectorRef
    ) {
        this.testAPI.getUsers().subscribe(res => {
            this.data = JSON.stringify(res);
        });
        console.log(this.data);
    }

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    reset() {
        this.myCarousel.reset(!this.resetAnim);
    }

    moveTo(slide: number) {
        this.myCarousel.moveTo(slide, !this.withAnim);
    }
}
