import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css'],
})
export class SelectUserComponent implements OnInit {
  @Input() users: User[] = [];
  showOptions: boolean = false;
  selectText: string = 'Välj användare';

  constructor(private userService: UserService) {
    this.userService.onUserSelected().subscribe((id) => {
      const name = this.users.find((user) => user.id === id)?.name;

      if (name) {
        this.selectText = name;
        this.showOptions = false;
      }
    });
  }

  ngOnInit(): void {}

  onClick() {
    this.showOptions = !this.showOptions;
  }
}
