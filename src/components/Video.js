import React from 'react'
import StyledVideo from '../components/StyledVideo'
import Title from '../components/Title';
import YouTube from 'react-youtube';

export default function Video() {
    return (
        <div>
            <StyledVideo>
                <div className="video">
                    <div className="video-columns video-text">
                        <Title title="Lorem ipsum dolor sit amet" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.</p>
                        <p>Tristique senectus et netus et malesuada fames ac. Sed turpis tincidunt id aliquet risus. Tortor pretium viverra suspendisse potenti. Ornare suspendisse sed nisi lacus sed viverra tellus in.</p>
                    </div>
                    <YouTube id="video-YouTube" className="video-columns" modestbranding="1" videoId="FQcPlk5APAs" onReady={(event) => event.target.pauseVideo()} />
                </div>
            </StyledVideo>
        </div>
    )
}
