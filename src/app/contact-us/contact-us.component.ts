import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.errorObject = {
      name: true,
      email: true,
      description: true,
      phoneNumber: true,
      category: true
    }
    this.disabledSubmit()
  }


  nameChangeInput() {
    console.log(this.fullName)
    if (this.fullName === '' || this.fullName === null || this.fullName.length < 10) {
      this.errorObject.name = true
    } else {
      this.errorObject.name = false
    }

    console.log(this.errorObject.name)
    this.disabledSubmit()
  }

  emailChangeInput() {
    console.log(this.email)
    if (this.email === '' || this.email === null || this.email.length < 10) {
      this.errorObject.email = true
    } else {
      try {
        if (this.email.split('@')[1].split('.')[1] === 'com') {
          this.errorObject.email = false
        } else {
          this.errorObject.email = true
        }
      } catch (e) {
        this.errorObject.email = true
      }

    }

    console.log(this.errorObject.email)
    this.disabledSubmit()
  }

  phoneNumberChangeinput() {
    console.log(this.phoneNumber)
    if (this.phoneNumber === '' || this.phoneNumber === null || this.phoneNumber.length < 11 || this.phoneNumber.length > 11) {
      this.errorObject.phoneNumber = true
    } else {
      if (Number(this.phoneNumber) !== NaN) {
        this.errorObject.phoneNumber = false
      } else {
        this.errorObject.phoneNumber = true
      }

    }

    console.log(this.errorObject.phoneNumber)
    this.disabledSubmit()
  }

  descriptionChangeInput() {
    console.log(this.description)
    if (this.description === '' || this.description === null || this.description.length < 20) {
      this.errorObject.description = true
    } else {
      this.errorObject.description = false
    }

    console.log(this.errorObject.description)
    this.disabledSubmit()
  }

  categoryChangeInput() {
    console.log(this.category)
    if (this.category !== '' || this.category !== null) {
      if (this.category === 'Automobile' || this.category === 'MotorCycle' || this.category === 'Marine' || this.category === 'Power-Product') {
        this.errorObject.category = false
      } else {
        this.errorObject.category = true
      }
    } else {
      this.errorObject.category = true
    }
    console.log(this.errorObject.category)
    this.disabledSubmit()
  }

  disabledSubmit() {
    return (this.errorObject.description || this.errorObject.name || this.errorObject.email || this.errorObject.phoneNumber || this.errorObject.category)
  }

  sendDataToserver() {

    let headers = new HttpHeaders({
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow': '*',
    });
    let options = { headers: headers };

    console.log('send data fron severe')
    this.http.post('https://mivors--tst3.custhelp.com/cc/Test/Create_Contact', {
      Name: this.fullName,
      Email: this.email,
      Number: this.phoneNumber,
      Category: this.category,
      Description: this.description
    }, options).subscribe(data => {
      console.log(data)
    })
  }
}
