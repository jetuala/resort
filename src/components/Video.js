import React from 'react'
import StyledVideo from '../components/StyledVideo'
import Title from '../components/Title';

export default function Video() {
    return (
        <div>
            <StyledVideo>
                <div className="resort-center resort-text">
                    <div>Video goes here.</div>
                    <div className="resort">
                        <Title title="More than a Vacation" />
                        <p>Galdin Quay has everything you could possibly wish for in a tropical beach resort, and much more. There’s something to suit everyone, whether you’re visiting for business or pleasure, relaxation or stimulation.</p>
                        <br />
                        <p>Relax by the white sand beach, learn to surf or scuba, fish in our nearby lagoon, and take an exercise class overlooking the ocean. There are even photo contests for budding photographers.</p>
                    </div>
                </div>
            </StyledVideo>
        </div>
    )
}
