import { Injectable } from '@angular/core';
import { Hero } from './hero';HeroConst
import { HeroConst } from './HeroConst';
@Injectable()

export class HeroService {
 getHeroes():Hero[]{
   return HeroConst;
 }
  constructor() { }

}
