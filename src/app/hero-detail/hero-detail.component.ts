import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  heroId: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.heroId = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(this.heroId)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    //this.location.back();
    let id = this.heroId ? this.heroId : null;
    //this.router.navigate(['/users', {id: id}]);
    this.router.navigate(['../', {id: id}], { relativeTo: this.route });
  }

}
