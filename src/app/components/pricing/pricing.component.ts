import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricing = {
    title: "YOUR CHOICE",
    description: "We have the right package for you",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    pricingBlocks: [
      {id: 1 , 
        Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , 
        title:"PERSONAL",
        subTitle:"The standard version",
        currency:"₹",
        price:19,
        featured:false,
        Downloads:"5 Downloads",
        Extensions:"2 Extensions",
        Tutorials:"Tutorials",
        Support:"Forum Support",
        updates:"1 year free updates",
        buttonText:"BUY NOW"
      },
      {id: 2 , 
        Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , 
        title:"STUDENT",
        subTitle:"Most popular choice",
        currency:"₹",
        price:29,
        featured:true,
        Downloads:"15 Downloads",
        Extensions:"5 Extensions",
        Tutorials:"Tutorials with Files",
        Support:"Forum Support",
        updates:"2 years free updates",
        buttonText:"BUY NOW"
      },
      {id: 3 , 
        Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , 
        title:"BUSINESS",
        subTitle:"For the whole team",
        currency:"₹",
        price:49,
        featured:false,
        Downloads:"Unlimited Downloads",
        Extensions:"Unlimited Extensions",
        Tutorials:"HD Video Tutorials",
        Support:"Chat Support",
        updates:"Lifetime free updates",
        buttonText:"BUY NOW"
      },     
    ]
  }
}
