import React from 'react';
import { useContext } from 'react';
// REACT HOOK! Use this to bypass passing props!!
import { RoomContext } from '../context';
import Title from '../components/Title';

// This function gets all unique values from the "type" for room options
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
    // Set only returns unique values!!
};

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;
    let types = getUnique(rooms,'type');
    // This variable adds 'all' option and uses SPREAD operator
    types = ['all', ...types];
    // map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select type of room*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {/* NAME is passed from context.js handleChange */}
                        {types}
                    </select>
                </div>
                {/* End of select type*/}
            </form>
            <form className="filter-form">
                {/* Select number of occupants*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {/* NAME is passed from context.js handleChange */}
                        {people}
                    </select>
                </div>
                {/* End of select type*/}
            </form>
        </section>
    )
}
