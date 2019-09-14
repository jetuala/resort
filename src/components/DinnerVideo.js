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
                        <Title title="Leo in vitae turpis massa sed elementum tempus." />
                        <p>Sociis natoque penatibus et magnis dis parturient montes nascetur. Sociis natoque penatibus et magnis dis. Malesuada pellentesque elit eget gravida. Eu nisl nunc mi ipsum faucibus vitae.</p>
                        <br />
                        <p>Orci ac auctor augue mauris augue neque. Consequat ac felis donec et odio. Elementum facilisis leo vel fringilla est ullamcorper. Nunc sed id semper risus in hendrerit.</p>
                    </div>
                </div>
            </StyledVideo>
        </div>
    )
}


