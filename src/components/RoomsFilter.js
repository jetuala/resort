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
                {/* Select number of occupants*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {/* NAME is passed from context.js handleChange */}
                        {people}
                    </select>
                </div>
                {/* End of select type*/}
                {/* Select room price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price {price} gil</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* End of room price */}
                {/* Select size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                        {/* Two inputs with the same ID??? */}
                    </div>
                </div>
                {/* end of size */}
                {/* breakfast and pet checkboxes */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast" 
                            checked={breakfast} 
                            onChange={handleChange} 
                        />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="pets" 
                            id="pets" 
                            checked={pets} 
                            onChange={handleChange} 
                        />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* end of checkboxes */}
            </form>
        </section>
    )
}
