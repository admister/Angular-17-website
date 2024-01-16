import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,SocialComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
