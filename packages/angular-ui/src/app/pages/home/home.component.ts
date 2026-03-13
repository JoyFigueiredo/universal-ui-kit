import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { ProjectService } from '../../services/project';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule, SocialMediaComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  saibaMais() {
    console.log("Saiba mais clicado");
  }

  comecar() {
    console.log("Começar agora clicado");
  }

  enviarEmail() {
    window.location.href = "mailto:joicebfigueiredo@gmail.com";
  }

}