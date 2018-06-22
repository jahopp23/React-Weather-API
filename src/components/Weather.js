import React from "react";

const Weather = props => (
        <div className="weather-container">

        { props.city && props.country &&  <p class="lead">Location: { props.city }, { props.country }</p> }
        { props.temperature &&  <p class="lead">Temperature: { props.temperature } celsius</p> }
        { props.humidity && <p class="lead">Humidity: { props.humidity }</p> }
        { props.description && <p class="lead">Conditions: { props.description }</p> }
        { props.error && <p class="lead">{ props.error }</p> }
        
       </div>

    );

export default Weather;