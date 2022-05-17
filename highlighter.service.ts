import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlighterService {

  constructor() { }

  next(results: any[]){
    for(let index =0; index <results.length; index++){
      if(results[index].highlight){
        delete results[index].highlight;
        results[(index+1) % results.length].highlight=true;
        return;
      }
    }
    results[0].highlight = true;
  }
}
