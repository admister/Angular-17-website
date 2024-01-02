import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  header = {
    title: "A FREE AND SIMPLE LANDING PAGE",
    description: "A FREE AND SIMPLE LANDING PAGE",
    url:"Namari is a free landing page template you can use for your projects. It is free to use for your\npersonal and commercial projects enjoy!",
    buttontext:"START CREATING TODAY"
  }

}
