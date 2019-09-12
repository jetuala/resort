import React, { Component } from 'react';
import Title from './Title';
import { FaHotTub, FaShower, FaShoppingBag, FaClinicMedical } from 'react-icons/fa';

export default class SpaServices extends Component {
    state = { 
        services: [
            {
                icon: <FaHotTub />,
                title: "Lorem",
                info: "Aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia."
            },
            {
                icon: <FaShower />,
                title: "Ipsum",
                info: "Aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia."
            },
            {
                icon: <FaShoppingBag />,
                title: "Dolor",
                info: "Aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia."
            },
            { 
                icon: <FaClinicMedical />,
                title: "Sit Amet",
                info: "Aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia."
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
