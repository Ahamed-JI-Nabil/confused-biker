import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <h2>How React Works</h2>
            <p>
                <strong>React</strong> is a component based JavaScript library.React render components in actual dom and we see a webpage and beside react create an virtual dom that is an exact copy of the actual dom. Whenever any state or data get change then react compare the actual dom to the virtual dom and see the difference and whenever it see any changes then react only changes that particular component or data. For this full page dont need to load again and we get a fast web application and  smooth user experience.
            </p>
            <br />
            <h2>Difference between state and props</h2>
            <p>
                <strong>Stare: </strong>
                State are mutable. We can define set in the component. State is set and update by object. State are accessible as the attributes of the component.
            </p>
            <p>
            <strong>Props: </strong>
            Props are immutable. we can pass props form parent component. After creation props remain static. Props are also accessible as the attributes of the component.
            </p>
        </div>
    );
};

export default Footer;