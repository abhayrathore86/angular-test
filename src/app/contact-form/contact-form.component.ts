import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public id: number;
  public allUser: any [];
  public user: any;
  public gender = true;
  constructor(private route: ActivatedRoute, private router: Router, private comService: CommonServiceService) { }

  ngOnInit() {

    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.comService.allUsers) {
      this.allUser = this.comService.allUsers;
      this.user = this.allUser.find((c) => {
        return this.id === c.id;
      });
    } else {
      this.router.navigate(['/lf']);
    }
    console.log(this.user);

  }

}
