import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe((users)=>{
      console.log(users);
      this.users = users;
    }, (error)=>{
      console.log();
    })
  }

  deleteUser(user) {
    this.userService.deleteUser(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user), 1);
    }, (error)=>{
      console.log(error);
    })
  }

  updateUser(user) {
    this.userService.setter(user);
    this.router.navigate(["/op"]);
  }

  newUser() {
    let user = new User();
    this.userService.setter(user);
    this.router.navigate(["/op"]);
  }


  ngOnInit() {
  }

}
