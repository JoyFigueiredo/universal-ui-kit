import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { ProjectService } from '../../features/projects/services/project.service';
import { ProjectComponent } from '../../features/projects/components/project-card/project-card.component';
import { Project } from '../../features/projects/models/project.model';
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
    document.getElementById('menu')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  comecar() {
    console.log("Começar agora clicado");
  }

  enviarEmail() {
    window.location.href = "mailto:joicebfigueiredo@gmail.com";
  }

  currentSection = 0;
  isScrolling = false;

  sections: HTMLElement[] = [];

  ngAfterViewInit() {
    this.sections = Array.from(document.querySelectorAll('section'));
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;

    this.isScrolling = true;

    if (event.deltaY > 0) {
      this.goToSection(this.currentSection + 1);
    } else {
      this.goToSection(this.currentSection - 1);
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // tempo da animação
  }

  goToSection(index: number) {
    if (index < 0 || index >= this.sections.length) return;

    this.currentSection = index;

    this.sections[index].scrollIntoView({
      behavior: 'smooth'
    });
  }

  startY = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (this.isScrolling) return;

    const endY = event.changedTouches[0].clientY;
    const diff = this.startY - endY;

    if (Math.abs(diff) < 50) return; // ignora toque pequeno

    this.isScrolling = true;

    if (diff > 0) {
      this.goToSection(this.currentSection + 1); // desce
    } else {
      this.goToSection(this.currentSection - 1); // sobe
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 800);
  }

}