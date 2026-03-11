import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, SocialMediaComponent  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

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
