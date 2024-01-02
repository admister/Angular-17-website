import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
about = {
  title: "SUCCESS",
  description: "How We Help You To Sell Your Product",
  detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
  buttontext:"START CREATING TODAY",
  IconBlocks: [
    {id: 1, icon:"fa-html5" , title:"HTML5 &amp; CSS3", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
    {id: 2, icon:"fa-bolt" , title:"Easy to Use", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
    {id: 3, icon:"fa-tablet" , title:"Fully Responsive", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
    {id: 4, icon:"fa-rocket" , title:"Parallax Effect", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"}
  ]
}
}
