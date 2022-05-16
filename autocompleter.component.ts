import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query = new FormControl();

  @Input() data: any ;

  @Output() itemSelected = new EventEmitter();

  results: any[] =[]

  constructor() { }

  ngOnInit(): void {
  }

  autocomplete() {
      let searchValue= this.query.value;
      for(let obj of this.data){
        for(let prop in obj) {
          if ( obj[prop] && obj[prop].toString().toLowerCase().includes(searchValue.toLowerCase())) {
            this.results.push(obj);
            break;
          }
        }
      }
  }

  next() {

    for(let index =0; index <this.results.length; index++){
      if(this.results[index].highlight){
        delete this.results[index].highlight;
        this.results[(index+1) % this.results.length].highlight=true;
        return;
      }
    }
    this.results[0].highlight = true;
  }

  select() {
    const highlightedItem = this.getHighlightedItem();
    //this.query.setValue(highlightedItem)
    this.itemSelected.emit(highlightedItem);
  }

  private getHighlightedItem() {
    for (let result of this.results) {
     if(result.highlight){
       return result;
     }
    }
  }
}
