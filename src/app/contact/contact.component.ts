import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name : string;
  email : string;
  message : string;
  constructor(public emailService: EmailService) {
    
   }

  ngOnInit() {
  }
  onSubmit(){
    let user = {
        name : this.name,
        email : this.email,
        message : this.message
    }
    console.log(user,"contact form");
    this.emailService.sendEmail(user).subscribe((res) =>{
        console.log(user,"contact form");
    });
  
  }
}
