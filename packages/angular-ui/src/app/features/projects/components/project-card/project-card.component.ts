import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectComponent {

  @Input() title!: string;

  @Input() description!: string;

  @Input() images: string[] = [];

  @Input() category!: string;

  @Input() technologies: string[] = [];

  @Input() github!: string;

  expanded = false;

  currentImage = 0;

  verProjeto() {
    window.open(this.github, '_blank');
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  nextImage(event: Event) {

    event.stopPropagation();

    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }

  }

  prevImage(event: Event) {

    event.stopPropagation();

    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = this.images.length - 1;
    }

  }

}