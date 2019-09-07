import React, { Component } from 'react'
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        // All data gets passed down to here
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    // getData {}
    componentDidMount() {
        // Makes sure all data is loaded before room component is rendered
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => 
            room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
                rooms, 
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
        });
    }

    // Destructures ("restructures" in my terms!) data from local (Contentful)-structured) data to object with one layer
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => 
                image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        // SPREAD operator expands this.state.rooms (taken from items from data.js) into tempRooms array
        const room = tempRooms.find((room) => {
            return room.slug === slug
        });
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterRooms)
        // console.log("context.js event type, name & value: " + type, name, value);
    };

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        // destructuring from state because this is a callback function (only run under hundleChange)
        let tempRooms = [...rooms];
        if (type !== 'all') { 
            tempRooms = tempRooms.filter( room => room.type === type)
        }
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{ 
                ...this.state, 
                getRoom: this.getRoom,
                handleChange: this.handleChange
            }}>
                {/* THIS IS SUPER IMPORTANT!!! */}
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function higherOrderComponentRoomConsumer(Component) {
    // Higher Order Component, a function that takes a component and returns another component
    // Think CONNECT from Redux...?
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props}context={value}>
            </Component>}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };
