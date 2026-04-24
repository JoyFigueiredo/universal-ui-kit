import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = [
    {
      title: 'Universal UI Kit',
      description: 'Biblioteca de componentes reutilizáveis em Angular.',
      image: 'images/projetos/exemplo.png',

      category: 'Web',

      technologies: [
        'Angular',
        'TypeScript',
        'CSS'
      ],

      github: 'https://github.com/JoyFigueiredo/universal-ui-kit'
    },
    {
      title: 'Universal UI Kit',
      description: 'Biblioteca de componentes reutilizáveis em Angular.',
      image: 'images/projetos/exemplo.png',

      category: 'Web',

      technologies: [
        'Angular',
        'TypeScript',
        'CSS'
      ],

      github: 'https://github.com/JoyFigueiredo/universal-ui-kit'
    },
    {
      title: 'Universal UI Kit',
      description: 'Biblioteca de componentes reutilizáveis em Angular.',
      image: 'images/projetos/exemplo.png',

      category: 'Web',

      technologies: [
        'Angular',
        'TypeScript',
        'CSS'
      ],

      github: 'https://github.com/JoyFigueiredo/universal-ui-kit'
    },
    {
      title: 'Universal UI Kit',
      description: 'Biblioteca de componentes reutilizáveis em Angular.',
      image: 'images/projetos/exemplo.png',

      category: 'Web',

      technologies: [
        'Angular',
        'TypeScript',
        'CSS'
      ],

      github: 'https://github.com/JoyFigueiredo/universal-ui-kit'
    }
  ];

  getProjects() {
    return this.projects;
  }

}