import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css'],
})
export class SelectUserComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() onSelectUser: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.onSelectUser.emit(parseInt(event.target.value));
  }
}
