import React from "react";
import './Card.scss';
import '../../index.scss';

import Dropdown from "../Dropdown/Dropdown";

function Card() {
    return (
        <div className="cardMain"><div className="MainTitle"><h2>FAQ </h2></div><Dropdown title='How many team members can I invite?' content='Teams are currently capped at 50 members, but we are working on providing more options!'  /><div className="SVGs"></div></div>
    )
}

export default Card;