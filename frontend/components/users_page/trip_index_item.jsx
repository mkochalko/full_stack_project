import React from 'react'

class TripIndexItem extends React.Component {

    render() {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Nov', 'Dev']
        // let month = this.props.departureFlight.departureDate.slice(5)
        // console.log(month)
        return(
            <li className="tab-trip-li">
                {
                    this.props.cities && this.props.departureFlight && this.props.returnFlight ? (
                        <div className="tab-trip-info-index-item">
                            <div className="tab-trip-info-top-line">
                                <div className="tab-trip-index-dates">
                                    <div>{this.props.departureFlight.departureDate}</div>
                                    <div className="tab-trip-index-dates-separator">-</div>
                                    <div> {this.props.returnFlight.departureDate}</div>
                                </div>
                                <div className="tab-trip-index-dates-airplane">
                                    <img src="https://image.flaticon.com/icons/svg/723/723955.svg" alt="airplane" height="15" width="15"/>
                                </div>
                            </div>
                            <div className="tap-trip-info-city-container">
                                <div>
                                    DEPARTS
                                    <h4>{this.props.cities[this.props.departureFlight.departureCityId].nameAbbreviation}</h4>
                                </div>
                                <div className="tap-trip-info-city-airplane">
                                    <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt="airplane"/>
                                </div>
                                <div>
                                    ARRIVES
                                    <h4>{this.props.cities[this.props.departureFlight.arrivalCityId].nameAbbreviation}</h4>
                                </div>
                            </div>
                            <div className="tap-trip-info-confirmation">
                                Confirmation # <span>{this.props.trip.tripCode}</span>
                            </div>
                        </div>
                     ) : ""
                }
                {/* {this.props.cities && this.props.departureFlight ? this.props.cities[this.props.departureFlight.departureCityId].nameAbbreviation : ""}
                <br/>
                {this.props.cities && this.props.departureFlight ? this.props.cities[this.props.departureFlight.arrivalCityId].nameAbbreviation : ""}
                <br/>
                {this.props.cities && this.props.returnFlight ? this.props.cities[this.props.returnFlight.departureCityId].nameAbbreviation : ""}
                <br/>
                {this.props.cities && this.props.returnFlight ? this.props.cities[this.props.returnFlight.arrivalCityId].nameAbbreviation : ""}
                <br/> 
                <div>{this.props.cities[this.props.returnFlight.departureCityId].nameAbbreviation}</div>
                <div>{this.props.cities[this.props.returnFlight.arrivalCityId].nameAbbreviation}</div>
                */}
            </li>
        )
    }
}

export default TripIndexItem;