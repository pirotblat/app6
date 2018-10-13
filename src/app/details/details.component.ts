import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  userId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private data: DataService) {
    //this.route.params.subscribe( params => this.user$ = params.id );
   }

  ngOnInit() {
    //this.userId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = parseInt(params.get('id'));
      //console.log('init ', this.userId);
      this.data.getUser(this.userId).subscribe( data => this.user$ = data );
    });
    //this.data.getUser(this.userId).subscribe( data => this.user$ = data );
    //this.data.getUser(this.user$).subscribe( data => this.user$ = data );
  }

  goPrev1() {
    let id = this.userId;
    if (this.userId > 1)
      id = this.userId - 1;
    return '/users/' + id;
  }
  goPrev() {
    if (this.userId > 1)
      this.userId = this.userId - 1;
    this.router.navigate(['/users', this.userId]);
  }

  goNext1() {
    const id = this.userId + 1;
    //console.log(this.userId);
    return '/users/' + id;
  }

  goNext() {
    this.userId = this.userId + 1;
    this.router.navigate(['/users', this.userId]);
  }

  goBack() {
    let id = this.userId ? this.userId : null;
    //this.router.navigate(['/users', {id: id}]);
    this.router.navigate(['../', {id: id}], { relativeTo: this.route });
  }

  showAddress() {
    this.router.navigate(['address'], { relativeTo: this.route });
  }
}
