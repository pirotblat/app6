import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users: Object[] = [];
  errorMsg = '';
  userId;
  constructor(private data: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users = data,
                                   error => this.errorMsg = error);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = parseInt(params.get('id'));
      //console.log(this.userId);
    });
  }

  onSelect(user) {
    //this.router.navigate(['/users', user.id]);
    this.router.navigate([user.id], { relativeTo: this.route });
  }

  isSelected(user) {
    //console.log(this.userId);
    return user.id === this.userId;
  }

}
