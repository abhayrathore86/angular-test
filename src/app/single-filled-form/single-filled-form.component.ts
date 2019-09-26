import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

import { ContactDetail } from '../contact-detail';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-filled-form',
  templateUrl: './single-filled-form.component.html',
  styleUrls: ['./single-filled-form.component.css']
})
export class SingleFilledFormComponent implements OnInit {

  constructor( private service: HttpServiceService, private router: Router ) { }

  ngOnInit() {
  }

  singleContactDetail(form: NgForm) {
    console.log('form data --- ', form);
    // tslint:disable-next-line:max-line-length
    const obj = new ContactDetail(form.value.txt_name, form.value.txt_dob, form.value.txt_email, form.value.txt_gender, form.value.txt_budget);

    this.service.postUser(obj)
      .then(data => {
        console.log('data : ', data);
        this.router.navigate(['/lf']);
      })
      .catch((err) => {
        console.error('error : ', err);
      });
  }
}
