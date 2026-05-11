import { Injectable } from '@angular/core';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [

    {
      title: 'Universal UI Kit',

      description:
        'Biblioteca moderna de componentes reutilizáveis em Angular com foco em design system, acessibilidade e interfaces premium.',

      image: 'images/projetos/exemplo.png',

      category: 'Front-end',

      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'UI Design'
      ],

      github:
        'https://github.com/JoyFigueiredo/universal-ui-kit',

      featured: true,

      year: '2026',

      status: 'Em desenvolvimento'
    },

    {
      title: 'Portfolio Premium',

      description:
        'Portfolio moderno desenvolvido em Angular com foco em UI premium, animações suaves e experiência visual elegante.',

      image: 'images/projetos/exemplo.png',

      category: 'Web Design',

      technologies: [
        'Angular',
        'CSS',
        'Responsive Design'
      ],

      github:
        'https://github.com/JoyFigueiredo',

      featured: true,

      year: '2026',

      status: 'Online'
    },

    {
      title: 'Sistema de Alimentação Pet',

      description:
        'Projeto de automação residencial utilizando hardware e software para alimentação automatizada de pets.',

      image: 'images/projetos/exemplo.png',

      category: 'IoT',

      technologies: [
        'Arduino',
        'C++',
        'LCD',
        'Automação'
      ],

      github:
        'https://github.com/JoyFigueiredo',

      year: '2025',

      status: 'Protótipo'
    },

    {
      title: 'Joycraft³',

      description:
        'Marca criativa unindo impressão 3D, crochê, design artesanal e identidade visual moderna.',

      image: 'images/projetos/exemplo.png',

      category: 'Creative Tech',

      technologies: [
        '3D Printing',
        'Branding',
        'Design'
      ],

      github:
        'https://github.com/JoyFigueiredo',

      year: '2026',

      status: 'Ativo'
    }

  ];

  getProjects(): Project[] {
    return this.projects;
  }

}