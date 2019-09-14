import React from 'react'
import StyledVideo from '../components/StyledVideo'
import Title from '../components/Title';
import YouTube from 'react-youtube';

export default function Video() {
    return (
        <div>
            <StyledVideo>
                <div className="video">
                    <YouTube id="video-YouTube" className="video-columns" modestbranding="1" videoId="FQcPlk5APAs" onReady={(event) => event.target.pauseVideo()} />
                    <div className="video-columns video-text">
                        <Title title="More than a Vacation" />
                        <p>Galdin Quay has everything you could possibly wish for in a tropical beach resort, and much more. There’s something to suit everyone, whether you’re visiting for business or pleasure, relaxation or stimulation.</p>
                        <p>Relax by the white sand beach, learn to surf or scuba, fish in our nearby lagoon, and take an exercise class overlooking the ocean. There are even photo contests for budding photographers.</p>
                    </div>
                </div>
            </StyledVideo>
        </div>
    )
}
