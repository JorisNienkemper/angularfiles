import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HighlighterService} from "../../services/highlighter.service";

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

  constructor(private highlighter:HighlighterService) { }

  ngOnInit(): void {
  }

  autocomplete() {
      this.results=[];
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
    this.highlighter.next(this.results);
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
