import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  newUser: User;
  newRepos: Repository;

  constructor(private http: HttpClient) {
    this.newUser = new User("", "", "", "", 0, 0, 0, "", new Date);
    this.newRepos = new Repository("", "", "", new Date, "");
  }
  searchUSer(searchName: string) {

    interface Responce {
      url: string,
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_on: Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apikey).toPromise().then(
        (result) => {
          this.newUser = result;
          console.log(this.newUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

  getRepo(searchName) {
    interface Repository {
      repo_name: string;
      html_url: string;
      repo_desc: string;
      repo_language: string;
      created_on: Date;
    }
    return new Promise((resolve, reject) => {
      this.http.get<Repository>('https://api.github.com/users/' + searchName + "/repos?order=created&sort=asc?access_token=" + environment.apikey).toPromise().then(
        (results) => {
          this.newRepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}

