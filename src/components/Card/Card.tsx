import React from 'react';
import './Card.scss';
import '../../index.scss';

import Dropdown from '../Dropdown/Dropdown';

function Card() {
    return (
        <div className="cardMain">
            <div className="SVGs">
                <svg viewBox='0 0 100 100'>
                    <use xlinkHref='../../assets/bg-pattern-desktop.svg'/>
                </svg>
            </div>
            <div className="MainTitle">
                <h2>FAQ</h2>
            </div>
            <Dropdown
                title="How many team members can I invite?"
                content="Teams are currently capped at 50 members, but we are working on providing more options!"
            />
            <Dropdown
                title="What is the maximum file upload size?"
                content="No more than 2GB. All files in your account must fit your allotted storage space."
            />
            <Dropdown
                title="How do I reset my password"
                content="If you forget your password, we will email you with a link in which you can upload a selfie with a piece of paper, on which is written 'password change' followed by your username."
            />
            <Dropdown
                title="Can I cancel my subscription?"
                content="Subscriptions must be cancelled at least 40 days in advance of your next payment, at which point your subscription will last until the end of the subscription period."
            />
            <Dropdown
                title="Do you provide additional support?"
                content="Instant chat support is available at all times to premium members, for lower tiers there may be up to an hour wait time. Alternatively, an email can be sent to our support teams, who will get back to you as soon as possible."
            />
        </div>
    );
}

export default Card;
