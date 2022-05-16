import { AutocompleterComponent } from './autocompleter.component';

describe('AutocompleterComponent', () => {
  let autocompleter:AutocompleterComponent;

  beforeEach(()=>{
       autocompleter = new AutocompleterComponent();
    }
  );


  it('walk through object with 1 property', () => {
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

  it('walk through object with 2 properties', () => {
    autocompleter.data =[
      {x: 'ho', y:'ha'},
      {x: 'he',y:'hu'},
      {x: 'hallo', y:'he'}
    ]
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    let results =[
      {x: 'he',y:'hu'},
      {x: 'hallo', y:'he'}
    ]
    expect(results).toEqual(autocompleter.results);
  });
});
