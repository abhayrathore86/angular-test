import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-filled-forms',
  templateUrl: './filled-forms.component.html',
  styleUrls: ['./filled-forms.component.css']
})
export class FilledFormsComponent implements OnInit {
  allUsers: any [];
  constructor( private service: HttpServiceService, private router: Router, private comService: CommonServiceService) { }

  ngOnInit() {

    this.service.getUser()
      .then(data => {
        this.allUsers = data;
        this.comService.allUsers = data;
        console.log('data : ', data);
      })
      .catch((err) => {
        console.error('error : ', err);
      });
  }
}
