import React from 'react'
import StyledVideo from '../components/StyledVideo'
import Title from '../components/Title';
import image from '../images/dining_bcg.jpg';

export default function DinnerVideo() {
    return (
        <div>
            <StyledVideo img={image}>
                <div className="resort-center resort-text">
                    <div className="resort">
                        <Title title="Your tastebuds will never thank you enough." />
                        <p>The Mother of Pearl only serves the freshest seafood, top-grade meats, and crispest vegetables.</p>
                        <br />
                        <p>Indulge in the best dishes Executive Chef Coctura Arlund has to offer.</p>
                    </div>
                    <div>Video goes here.</div>
                </div>
            </StyledVideo>
        </div>
    )
}
