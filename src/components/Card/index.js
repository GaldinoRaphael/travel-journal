import React from "react";
import './style.css';

import Photo from '../../imgs/mount-fuji.svg';
import LocationPin from '../../imgs/location-pin.svg';

export default function Card({item}){
    return (
            <div className="card">
                <figure className="card-figure">
                    <img src={item.imageUrl} alt="location" className="card-figure--image"/>
                </figure>
                <section className="card-informations">
                    <p className="card-informations--location">
                        <span className="card-informations--location-country"><img src={LocationPin} alt="location"/>{item.location}</span>
                        <a className="card-informations--location-link light-grey" href={item.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </p>
                    <h1 className="card-informations--title bold grey">{item.title}</h1>
                    <p className="card-informations--date bold grey">{item.startDate}</p>
                    <p className="card-informations--description grey">{item.description}</p>
                </section>
                <hr></hr>
            </div>
    );
}