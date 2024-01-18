/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ProductCardComponent } from '@/components/product-card/product-card.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NzCarouselModule, CommonModule, ProductCardComponent, SlickCarouselModule],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    slides = [
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
        { img: 'https://dummyimage.com/350x150/ccc/000' },
        { img: 'https://dummyimage.com/350x150/dff/000' },
        { img: 'https://dummyimage.com/350x150/f2e/000' },
        { img: 'https://dummyimage.com/350x150/ef2/000' },
    ];

    slideConfig = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: false,
    };

    addSlide() {
        const color = Math.floor(Math.random() * 16777215)
            .toString(3)
            .split('')
            .reverse()
            .join('');
        this.slides.push({ img: `https://dummyimage.com/350x150/${color}/000` });
    }

    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }

    slickInit(e: unknown) {
        console.log(e);
        console.log('slick initialized');
    }

    breakpoint(e: unknown) {
        console.log('breakpoint');
    }

    afterChange(e: unknown) {
        console.log('afterChange');
    }

    beforeChange(e: unknown) {
        console.log('beforeChange');
    }
}
