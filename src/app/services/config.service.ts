import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

configuration : ConfigItem[] = [
  {id: 1,
   name:"about", 
      data : {
          title: "SUCCESS",
          description: "How We Help You To Sell Your Product",
          detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
          buttontext:"START CREATING TODAY",
          iconBlocks: [
          {id: 1, icon:"fa-html5" , title:"HTML5 &amp; CSS3", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
          {id: 2, icon:"fa-bolt" , title:"Easy to Use", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
          {id: 3, icon:"fa-tablet" , title:"Fully Responsive", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
          {id: 4, icon:"fa-rocket" , title:"Parallax Effect", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"}
          ]
    }
  },
  {id:2,
  name:"clients",
      data: {
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
  },
  {id:3,
  name:"gallery",
      data: {
          title: "Gallery",
          description: "Project images",
          detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
          galleryBlocks: [
              {id: 1 , url:"../assets/images/gallery-images/gallery-image-1.jpg" , name:"Tree"},
              {id: 2 , url:"../assets/images/gallery-images/gallery-image-2.jpg", name:"Fingerprint"},
              {id: 3 , url:"../assets/images/gallery-images/gallery-image-3.jpg" , name:"The Man"},
              {id: 4 , url:"../assets/images/gallery-images/gallery-image-4.jpg" , name:"Mustache"},
              {id: 5 , url:"../assets/images/gallery-images/gallery-image-5.jpg" , name:"Moose"},
              {id: 6 , url:"../assets/images/gallery-images/gallery-image-6.jpg" , name:"Justice"},
          ]
    }
  },
  {id:4,
  name:"header",  
      data: {
      title: "A FREE AND SIMPLE LANDING PAGE",
      description: "A FREE AND SIMPLE LANDING PAGE",
      url:"Namari is a free landing page template you can use for your projects. It is free to use for your\npersonal and commercial projects enjoy!",
      buttontext:"START CREATING TODAY"
    }
  },
  {id:5,
  name:"pricing",
      data: {
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
  },
  {id:6,
  name:"services",  
      data:{
      title: 'BELIEVING',
      description: 'Focusing On What Matters Most',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }
  },
  {id:7,
  name:"testimonials",
  data: {
      title: 'FEEDBACK',
      description: 'What our customers are saying',
      detail: '',
      feedbackBlock : [
          {name: 'John Doe', userimage: '../assets/images/user-images/user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC'},
          {name: 'Roslyn Doe', userimage: '../assets/images/user-images/user-2.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ'},
          {name: 'Thomas Doe', userimage: '../assets/images/user-images/user-3.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR'},
      ]
    }
  },
  {id:8,
  name:"footer",
      data: {
          title:"Made with love by",
          url:"https://www.shapingrain.com",
          developer:"ShapingRain"
      }
  },
  {id:9,
      name:"social",
      data:{ 
      title:"socialicons",
      socialBlock: [ 
          {id:1,
          title:"Facebook",
          target:"_blank",
          username:"admister",
          url:"https://www.facebook.com/",
          icon:"facebook",
        },
        {id:2,
          title:"Behance",
          target:"_blank",
          username:"admister",
          url:"http://www.behance.net/",
          icon:"behance",
        },
        {id:3,
          title:"twitter",
          target:"_blank",
          username:"admister",
          url:"http://www.x.com/",
          icon:"twitter",
        },
        {id:4,
          title:"Instagram",
          target:"_blank",
          username:"admister",
          url:"http://www.instagram.com/",
          icon:"instagram",
        },
        {id:5,
          title:"Google+",
          target:"_blank",
          username:"admister",
          url:"http://google.com/+",
          icon:"google-plus",
        },
      ]
    }
  }
];

  constructor() { }

  getAllPages(): ConfigItem[] {
    return this.configuration;
  }

  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find((configItem) => configItem.name === pageName);
  }
}
