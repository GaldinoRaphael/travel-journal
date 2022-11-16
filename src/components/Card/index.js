import React from "react";
import './style.css';

import Photo from '../../imgs/mount-fuji.svg';
import LocationPin from '../../imgs/location-pin.svg';

export default function Card(){
    return (
            <div className="card">
                <figure>
                    <img src={Photo} alt="location"></img>
                </figure>
                <section className="card-informations">
                    <p className="card-informations--location">
                        <span className="card-informations--location-country"><img src={LocationPin} alt="location"/>location</span>
                        <a className="card-informations--location-link light-grey" href="#">View on Google Maps</a>
                    </p>
                    <h1 className="card-informations--title bold grey">title</h1>
                    <p className="card-informations--date bold grey">date</p>
                    <p className="grey">text</p>
                </section>
                <hr></hr>
            </div>
    );
}