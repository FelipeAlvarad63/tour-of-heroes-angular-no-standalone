import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})

export class Heroes {
  heroes: Hero[] | undefined;

  constructor(private heroService: HeroService) {};

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
