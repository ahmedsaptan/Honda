import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  fullName = ''
  email = ''
  description = ''
  phoneNumber = ''
  category = ''
  errorObject

  constructor() { }

  ngOnInit() {
    this.errorObject = {
      name: true,
      email: true,
      description: true,
      phoneNumber: true,
      category: true
    }
  }
  

  nameChangeInput() {
    console.log(this.fullName)
    if(this.fullName === '' || this.fullName === null || this.fullName.length < 10 ) {
      this.errorObject.name = true
    } else {
      this.errorObject.name = false
    }

    console.log(this.errorObject)
    this.disabledSubmit()
  }

  emailChangeInput() {
    if(this.email === '' || this.email === null || this.email.length < 10) {
      this.errorObject.email = true
    } else {
      this.errorObject.email = false
    }

    console.log(this.errorObject)
    this.disabledSubmit()
  }

  phoneNumberChangeinput() {
    if(this.phoneNumber === '' || this.phoneNumber === null || this.phoneNumber.length < 11 || this.phoneNumber.length > 11 ) {
      this.errorObject.phoneNumber = true
    } else {
      this.errorObject.phoneNumber = false
    }

    console.log(this.errorObject)
    this.disabledSubmit()
  }

  descriptionChangeInput() {
    if(this.description === '' || this.description === null || this.description.length < 50) {
      this.errorObject.description = true
    } else {
      this.errorObject.description = false
    }

    console.log(this.errorObject)
    this.disabledSubmit()
  }

  categoryChangeInput() {
    if(this.category === '' || this.category === null) {
      if(this.description !== 'Automobile' && this.description !== 'MotorCycle' && this.description !== 'Marine' && this.description !== 'Power-Product') {
        this.errorObject.category = true
      }else {
        this.errorObject.category = false
      }
    } 

    console.log(this.errorObject)
    this.disabledSubmit()
  }

  disabledSubmit() {
    return !(this.errorObject.description && this.errorObject.name && this.errorObject.email && this.errorObject.phoneNumber && this.errorObject.category)
  }
  sendDataToserver() {
    console.log(this.category)
    console.log(this.email)
    console.log(this.description)
    console.log(this.phoneNumber)
    console.log(this.fullName)
  }
}
