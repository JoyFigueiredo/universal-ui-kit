import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';

@Component({
  selector: 'app-tcc',
  standalone: true,
  imports: [CommonModule, CarrosselComponent],
  templateUrl: './tcc.component.html',
  styleUrls: ['./tcc.component.css']
})
export class TCCComponent {


  tccImages = [
    'images/TCC/Inicio.png',
    'images/TCC/tcc2.png',
    'images/TCC/tcc3.png'
  ];
}