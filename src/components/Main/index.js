import React from "react";
import './style.css';

import Data from '../../data/data.js'

import Card from '../Card';

export default function Main(){
    const cards = Data.map((data, index) => {
       return (<Card key={index} item={data} />)
    })

    return (
        <main>
            { cards }
        </main>
    );
}
