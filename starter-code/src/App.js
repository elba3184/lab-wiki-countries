import React, {Component} from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import ShowCountries from './components/ShowCountries';
import countries from './countries.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: countries
    };
  }
  render () {
    return (
      <div className="App">
        <ShowCountries countries={this.state.countriesList}/>
      <CountryDetail/>
    
      </div>
    );
  }
}

export default App;
