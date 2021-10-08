import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-option',
  templateUrl: './user-option.component.html',
  styleUrls: ['./user-option.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.2s {{delay}}s ease-out', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.2s {{delay}}s linear', style({ transform: 'scale(0)' })),
      ]),
    ]),
  ],
})
export class UserOptionComponent implements OnInit {
  @Input() user: User = { id: 0, name: '', ix: 0 };
  @Input() show: boolean = false;
  topPos: number = 1;
  delay: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const height = 42;
    const seconds = 0.05;
    this.topPos = this.user.ix * height;
    this.delay = this.user.ix * seconds;
  }

  onClick() {
    this.userService.userSelected(this.user.id);
  }
}
