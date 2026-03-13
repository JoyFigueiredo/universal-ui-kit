import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;

  @Input() category!: string;
  @Input() technologies: string[] = [];

  @Input() github!: string;

  verProjeto() {
    window.open(this.github, '_blank');
  }

}