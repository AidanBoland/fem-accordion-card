import React from 'react';
import './Card.scss';
import '../../index.scss';

import Dropdown from '../Dropdown/Dropdown';

function Card() {
    return (
        <div className="cardMain">
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
            <div className="SVGs">
                {/* <svg width="100%" xmlns="http://www.w3.org/2000/svg">
                    <g fillRule="nonzero" fill="none" opacity=".099">
                        <path
                            d="M468.755 937.353L19.744 671.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 381.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 936.933a59.64 59.64 0 01-59.17.42z"
                            fill="#6862E6"
                        />
                        <path
                            d="M468.755 561.353L19.744 295.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 5.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 560.933a59.64 59.64 0 01-59.17.42z"
                            stroke="#1E1F36"
                        />
                        <path
                            d="M468.755 636.353L19.744 370.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 80.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 635.933a59.64 59.64 0 01-59.17.42z"
                            stroke="#1E1F36"
                        />
                    </g>
                </svg> */}
                <img src='../../assets/bg-pattern-desktop.svg' alt=''/>
            </div>
        </div>
    );
}

export default Card;
