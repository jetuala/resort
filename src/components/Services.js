import React, { Component } from 'react';
import Title from './Title';
import { FaHotTub, FaUtensils, FaFish, FaCampground } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaHotTub/>,
                title: "World Class Spa",
                info: "Indulge yourself in our world-class spa! Services include massages, facials, manicures, and pedicures."
            },
            {
                icon: <FaUtensils/>,
                title: "Five Star Restaurant",
                info: "The Mother of Pearl is the best restaurant outside of Lestallum. Enjoy dishes such as Galdin Gratin and Bounty Risotto."
            },
            {
                icon: <FaFish/>,
                title: "Tranquil Fishing",
                info: "The seas just outside Galdin boast a wide selection of fish, such as the giant Trevally and the murk grouper."
            },
            { 
                icon: <FaCampground/>,
                title: "Spacious Campground Space",
                info: "Feel like roughing it? Spread out in our vast camping grounds or rent our campers."
            }
        ]
    }

    render() {
        return (
            <section className="services">
               <Title title="Services" />
               <div className="services-center">
                   {this.state.services.map((item, index) => {
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                   })}
               </div>
            </section>
        )
    }
}
