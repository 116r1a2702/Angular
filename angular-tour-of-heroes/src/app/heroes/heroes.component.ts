import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service'
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
selectedHero: Hero;
  constructor(private heroService:HeroService) { }
  onselect(hero:Hero):void{
    this.selectedHero=hero;
  }
  heroes:Hero[];
  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
