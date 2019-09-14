import React from 'react'
import StyledVideo from '../components/StyledVideo'
import Title from '../components/Title';
import YouTube from 'react-youtube';
import image from '../images/dining_bcg.jpg';

export default function DinnerVideo() {
    return (
        <div>
            <StyledVideo img={image}>
                <div className="video">
                    <YouTube id="video-YouTube" className="video-columns" modestbranding="1" videoId="D6zjRYWcP2o" onReady={(event) => event.target.pauseVideo()} />
                    <div className="video-columns video-text">
                        <Title title="Your tastebuds will never thank you enough." />
                        <p>The Mother of Pearl only serves the freshest seafood, top-grade meats, and highest quality ingredients. Your dining experience will be second-to-none, every time you visit -- guaranteed.</p>
                        <br />
                        <p>Indulge in the best dishes <a href="https://finalfantasy.fandom.com/wiki/Coctura_Arlund" target="_blank" rel="noopener noreferrer">Executive Chef Coctura Arlund</a> has to offer. Chef Arlund has received multiple awards from around the world, and she has brought her expertise to exclusively cater to Galdin Quay customers.</p>
                    </div>
                </div>
            </StyledVideo>
        </div>
    )
}


