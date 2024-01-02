import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials= {
    title: 'FEEDBACK',
    description: 'What our customers are saying',
    detail: '',
    feedbacks : [
        {name: 'John Doe', userimage: '../assets/images/user-images/user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC'},
        {name: 'Roslyn Doe', userimage: '../assets/images/user-images/user-2.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ'},
        {name: 'Thomas Doe', userimage: '../assets/images/user-images/user-3.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR'},
    ]
}
}
