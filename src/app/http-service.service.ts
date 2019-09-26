import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../environments/environment';
import {ContactDetail} from './contact-detail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private http: HttpClient) {
  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${environment.base_api}/users`;
      this.http.get(encodeURI(apiUrl))
        .toPromise()
        .then((response: HttpResponse<any>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }


  postUser(data: ContactDetail): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${environment.base_api}/users`;

      this.http.post(apiUrl, data)
        .toPromise()
        .then((response: HttpResponse<any>) => {
          resolve(response);
        })
        .catch((error) => {
          console.log('error : ', error);
        });
    });
  }
}

