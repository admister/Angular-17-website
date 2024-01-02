import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  client = {
    title: "TRUST",
    description: "Companies who use our services",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    companyBlocks: [
      {id: 1 , Image:"../assets/images/company-images/company-logo1.png" , name:"Tree"},
      {id: 2 , Image:"../assets/images/company-images/company-logo2.png", name:"Fingerprint"},
      {id: 3 , Image:"../assets/images/company-images/company-logo3.png" , name:"The Man"},
      {id: 4 , Image:"../assets/images/company-images/company-logo4.png" , name:"Mustache"},
      {id: 5 , Image:"../assets/images/company-images/company-logo5.png" , name:"Moose"},
      {id: 6 , Image:"../assets/images/company-images/company-logo6.png" , name:"Justice"},
      {id: 7 , Image:"../assets/images/company-images/company-logo7.png" , name:"Ball"},
      {id: 8 , Image:"../assets/images/company-images/company-logo8.png" , name:"Cold"},
      {id: 9 , Image:"../assets/images/company-images/company-logo9.png" , name:"Apple"},
    ]
  }
}
