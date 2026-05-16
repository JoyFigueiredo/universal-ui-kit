import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-carrossel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carrossel.component.html',
    styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {

    @Input() images: string[] = [];
    @Input() title: string = '';

    currentImage = 0;

    nextImage(event?: Event) {
        event?.stopPropagation();

        this.currentImage =
            (this.currentImage + 1) % this.images.length;
    }

    prevImage(event?: Event) {
        event?.stopPropagation();

        this.currentImage =
            (this.currentImage - 1 + this.images.length) % this.images.length;
    }
}