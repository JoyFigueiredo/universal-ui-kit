import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      image: 'images/projetos/exemplo.png',
      link: 'https://github.com/JoyFigueiredo/universal-ui-kit'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image: 'images/projetos/exemplo.png',
      link: 'https://github.com/JoyFigueiredo/pet-feeder'
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      image: 'images/projetos/exemplo.png',
      link: 'https://github.com/JoyFigueiredo/project-3'
    },
    {
      title: 'Projeto 4',
      description: 'Descrição do projeto 4',
      image: 'images/projetos/exemplo.png',
      link: 'https://github.com/JoyFigueiredo/project-4'
    }

  ];

  getProjects(){
    return this.projects;
  }

}