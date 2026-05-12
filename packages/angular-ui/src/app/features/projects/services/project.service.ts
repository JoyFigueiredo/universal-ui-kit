import { Injectable } from '@angular/core';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [

    {
      title: '2048 Game',

      description:
        'Versão gráfica do clássico jogo 2048 desenvolvida em C utilizando Allegro 5. Projeto focado em lógica de movimentação baseada em matrizes, renderização gráfica, manipulação de eventos, áudio e estruturação de sistemas em baixo nível.',

      image: 'images/projetos/2048/jogo.png',

      category: 'Game Development',

      technologies: [
        'C',
        'Allegro 5',
        'Game Logic',
        'Matrix Manipulation',
        'Audio System'
      ],

      github:
        'https://github.com/JoyFigueiredo/Jogo2048',

      featured: true,

      year: '2022',

      status: 'Concluído'
    },

    {
  title: 'Automatic Pet Feeder',

  description:
    'Sistema embarcado desenvolvido como Trabalho de Conclusão de Curso (TCC) para automação da alimentação de pets, com controle de horários, porções e acionamento automatizado. O projeto integra hardware, eletrônica, microcontroladores e lógica de automação.',

  image: 'images/projetos/TCC/Inicio.png',

  category: 'Embedded Systems',

  technologies: [
    'Arduino',
    'C++',
    'Embedded Systems',
    'Electronics',
    'Automation'
  ],

  github:
    'https://github.com/JoyFigueiredo/AlimentadorDePet',

  featured: true,

  year: '2026',

  status: 'Concluído'
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