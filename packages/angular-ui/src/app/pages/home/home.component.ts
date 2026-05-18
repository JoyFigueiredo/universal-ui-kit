import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../../components/button/button.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';

import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { TCCComponent } from '../TCC/tcc.component';

import { ProjectsComponent } from '../project/projects.component';
import { ProjectComponent } from '../../features/projects/components/project-card/project-card.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    ButtonComponent,
    SocialMediaComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,

    TCCComponent,
    ProjectComponent
  ],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {

  saibaMais() {

    document
      .getElementById('projects')
      ?.scrollIntoView({
        behavior: 'smooth'
      });

  }


  baixarCurriculo() {

    window.open(
      'files/Curriculo-Joice-Barros-de-Figueiredo.pdf',
      '_blank'
    );

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

  ngAfterViewInit() {

    const reveals =
      document.querySelectorAll('.reveal');

    const observer =
      new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }

        });

      }, {
        threshold: 0.15
      });

    reveals.forEach((el) => {
      observer.observe(el);
    });

  }

}
