import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  expanded = false;

  toggleSkills() {
    this.expanded = !this.expanded;
  }

  skills = [

    {
      icon: 'fa-brands fa-angular',
      name: 'Angular'
    },

    {
      icon: 'fa-brands fa-js',
      name: 'JavaScript'
    },

    {
      icon: 'fa-brands fa-html5',
      name: 'HTML5'
    },

    {
      icon: 'fa-brands fa-css3-alt',
      name: 'CSS3'
    },

    {
      icon: 'fa-brands fa-sass',
      name: 'SCSS'
    },

    {
      icon: 'fa-brands fa-node-js',
      name: 'Node.js'
    },

    {
      icon: 'fa-brands fa-python',
      name: 'Python'
    },

    {
      icon: 'fa-solid fa-microchip',
      name: 'ESP32'
    },

    {
      icon: 'fa-solid fa-cube',
      name: '3D Print'
    },

    {
      icon: 'fa-brands fa-git-alt',
      name: 'Git'
    },

    {
      icon: 'fa-brands fa-github',
      name: 'GitHub'
    },

    {
      icon: 'fa-solid fa-gamepad',
      name: 'Godot'
    }

  ];

}