import styled from 'styled-components';
import defaultImg from '../images/video_bcg.jpg';

const StyledHero = styled.header`
    min-height: 40vh;
    background: url(${props => props.img ? props.img:defaultImg }) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHero;