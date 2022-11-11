import React, { FunctionComponent, useState } from 'react';
import '../../index.scss';
import './Dropdown.scss';

interface DropdownProps {
    title: string;
    content: string;
}

function Dropdown(props: DropdownProps) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div id='Dropdown' className={showDropdown ? 'Dropped' : 'Folded'}>
            <div
                id="anFAQ"
                className="FlexCont"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <div className="TitleBlock">
                    <h1>{props.title}</h1>
                </div>
                <div className="SVGBlock">
                    <svg
                        width="10"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 .799l4 4 4-4"
                            stroke="#F47B56"
                            strokeWidth="2"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <p>{props.content}</p>
            {/* {showDropdown === true && <p>{props.content}</p>} */}
        </div>
    );
}

export default Dropdown;
