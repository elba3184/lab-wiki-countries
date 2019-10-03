import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ShowCountries extends Component {

    displayCountries = () => {
        let countriesList = this.props.countries.map(eachCountry =>{
            let list =  
            <div>
            <div className="container">
                        <div className="row">
                        <div className="col-5" style={{maxHeight:'90vh', overflow: 'scroll'}}>
                            <div className="list-group">
                            <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                            <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                            <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                            <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                            <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                            <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                            <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                            <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                            <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                            <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                            <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                            <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                            <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                            <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
                            <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h1>{eachCountry.name.official}</h1>
                            <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                <td style={{width: '30%'}}>Capital</td>
                                <td>{eachCountry.capital}</td>
                                </tr>
                                <tr>
                                <td>Area</td>
                                <td>{eachCountry.area} km
                                    <sup>2</sup>
                                </td>
                                </tr>
                                <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                    <li><a href="/AND">{eachCountry.borders}</a></li>
                                   
                                    </ul>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
          return list;
        })
        return countriesList;
    }
    
    render () {
        return (
            <div>
                {this.displayCountries()}
            </div>
        )
    }
}

export default ShowCountries;