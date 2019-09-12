import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import Footer from '../components/Footer';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props.match.params.slug)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>No such room could be found...</h3>
                <Link to='/rooms' className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }

        // Destructuring data from context for use in SingleRoom component
        const {name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        // MORE destructuring!
        const [mainImg, ...defaultImg] = images;
        // Remember REST operator takes REST of array/object and puts it into another array/object!!

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}> 
                {/* Okay, I KINDA get this. I need to study DESTRUCTURING! It's SUPER HANDY!!! */}
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            // defaultImg is from destructuring on line 40.
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: {price} gil</h6>
                            <h6>size: {size} sqft</h6>
                            <h6>
                                max capacity: {
                                    capacity > 1 ? `${capacity} people`: `${capacity} person` 
                                }
                            </h6>
                            <h6>{pets?"Chocobos allowed":"no chocobos allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                            {/* AND operator in above line only renders if condition is true */}
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
                <Footer />
            </>
        );
    }
}
