import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query = new FormControl();

  @Input() data: any ;
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
    
    this.results[0].highlight = true;
  }
}
