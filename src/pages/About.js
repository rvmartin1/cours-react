import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1>
            <br></br>
            <p>du texte
            </p>
            <p>encore du texte</p>
        </div>
    );
};

export default About;