import { Component, OnInit } from '@angular/core';
import{ User } from '../user';
import{ Repository } from '../repository';
import { UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  users: User;
  repos: Repository;
  constructor(public userService: UserServiceService, private repoService: UserServiceService) { }

  searchs(searchName) {
    this.userService.searchUSer(searchName).then(
      (success) => {
        this.users = this.userService.newUser;
      },
      (error) => {
        console.log(error)
      }
    );
    this.repoService.getRepo(searchName).then(
      (results) => {
        this.repos = this.repoService.newRepos;
        console.log(this.repos);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  ngOnInit(): void {
    this.searchs('joshuaiyumva');
  }

}