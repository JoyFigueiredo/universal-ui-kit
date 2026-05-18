import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from '../../features/projects/components/project-card/project-card.component';

import { ProjectService } from '../../features/projects/services/project.service';
import { Project } from '../../features/projects/models/project.model';


@Component({
  selector: 'app-projects',
  standalone: true,

  imports: [
    CommonModule,
    ProjectComponent
  ],

  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) {

    this.projects =
      this.projectService.getProjects();

  }

  scrollProjects(
    direction: 'left' | 'right'
  ) {

    const container =
      document.getElementById(
        'projects-carousel'
      );

    if (!container) return;

    const scrollAmount = 420;

    container.scrollBy({
      left:
        direction === 'right'
          ? scrollAmount
          : -scrollAmount,

      behavior: 'smooth'
    });

  }

}