import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import StyledHero from '../components/StyledHero';

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at 100 gil">
                    <Link to='/rooms' className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services>

            </Services>
            <FeaturedRooms />
            <StyledHero>hello</StyledHero>
        </>
    )
}

export default Home
