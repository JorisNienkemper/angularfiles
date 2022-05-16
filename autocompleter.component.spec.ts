import { AutocompleterComponent } from './autocompleter.component';

describe('AutocompleterComponent', () => {
  let autocompleter:AutocompleterComponent;

  beforeEach(()=>{
       autocompleter = new AutocompleterComponent();
    }
  );


  it('should autocomplete all objects of which the x property contains an e', () => {
    autocompleter.data =[
      {x: 'hoi'},
      {x: 'he'},
      {x: 'hallee'}
    ]
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    let results =[
      {x: 'he'},
      {x: 'hallee'}
    ]
    expect(autocompleter.results).toEqual(results);

  });

  it('should autocomplete all the object of which at least one property contains an e', () => {
    autocompleter.data =[
      {x: 'ho', y:'ha'},
      {x: 'he',y:'hu'},
      {x: 'hallo', y:'he'},
      {x: 'halloe', y:'he'}
    ]
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    let results =[
      {x: 'he',y:'hu'},
      {x: 'hallo', y:'he'},
      {x: 'halloe', y:'he'}
    ]
    expect(results).toEqual(autocompleter.results);
  });

  it('should case-insensitive autocomplete', () => {
    autocompleter.data =[
      {x: 'hoe'},
      {x: 'hE'}
    ]
    autocompleter.query.setValue('E');
    autocompleter.autocomplete();
    let results =[
      {x: 'hoe'},
      {x: 'hE'}
    ]
    expect(results).toEqual(autocompleter.results);
  });

  it('should ignore null and undefined when autocompleting', () => {
    autocompleter.data =[
      {x: null},
      {x: undefined}
    ]
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    let results: any[] = [];
    expect(results).toEqual(autocompleter.results);
  });

  it('should autocomplete on numbers', () => {
    autocompleter.data =[
      {x:1}
    ]
    autocompleter.query.setValue('1');
    autocompleter.autocomplete();
    let results: any[] = [{x:1}];
    expect(results).toEqual(autocompleter.results);
  });
});

describe('tests voor de next() method', ()=> {

  let autocompleter: AutocompleterComponent;

  beforeEach(() => {
      autocompleter = new AutocompleterComponent();
    }
  );

  it('should autocomplete all the object of which at least one property contains an e', () => {
    autocompleter.data =[
      {x: 'ho', y:'ha'},
      {x: 'he',y:'hu'},
      {x: 'hallo', y:'he'},
      {x: 'halloe', y:'he'}
    ]
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    autocompleter.next();
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBeUndefined();
    expect(autocompleter.results[1].highlight).toBeTrue();
  });
})
