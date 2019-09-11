import React, { Component } from 'react'
// import items from './data'; Getting data from Contentful now!!
import client from './contentful';
import moment from 'moment';

const RoomContext = React.createContext();
const date = new Date();

class RoomProvider extends Component {
    state = {
        // All data gets passed down to here
        ciDate: date,
        coDate: moment(date).add(1, 'days').toDate(),
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
    // getData 

    getData = async () => {
        try {
            let response = await client.getEntries({
                content_type: 'beachResortRooms', 
                order: 'fields.price,fields.capacity'
            });
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
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
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        // Makes sure all data is loaded before room component is rendered
        this.getData();
        // let rooms = this.formatData(items);
        // let featuredRooms = rooms.filter(room => 
        //     room.featured === true);
        // let maxPrice = Math.max(...rooms.map(item => item.price));
        // let maxSize = Math.max(...rooms.map(item => item.size));
        // this.setState({
        //         rooms, 
        //         featuredRooms,
        //         sortedRooms: rooms,
        //         loading: false,
        //         price: maxPrice,
        //         maxPrice,
        //         maxSize
        // });
    }

    // Destructures ("restructures" in my terms!) data from local (Contentful)-structured) data to object with one layer
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
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

    handleCIChange = event => {
        if (moment(event).isBefore(date)) {
            alert("Check-in date cannot be sooner than today.");
        } else if (moment(event).isBefore(moment(this.state.coDate), 'day')) {
            this.setState({
                ciDate: event
            })
        } else {
            this.setState({
                ciDate: event,
                coDate: moment(event).add(1, 'days').toDate()
            })
        }
    }

    handleCOChange = event => {
        if (moment(event).isBefore(moment(this.state.ciDate), 'day') || moment(event).isSame(moment(this.state.ciDate), 'day')) {
            alert("Check-out date cannot be sooner than or equal to check-in date.");
        } else {
            this.setState({
                coDate: event
            })
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterRooms)
    };

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        // destructuring from state because this is a callback under handleChange
        // all rooms
        let tempRooms = [...rooms];
        // transform the capacity & price values from string to number
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type
        if (type !== 'all') { 
            tempRooms = tempRooms.filter( room => room.type === type);
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter( room => room.capacity >= capacity);
        }

        // filter by price
        tempRooms = tempRooms.filter( room => room.price <= price);

        // filter by size
        tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize);

        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter( room => room.breakfast === true );
        }

        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter( room => room.pets === true );
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
                handleCIChange: this.handleCIChange,
                handleCOChange: this.handleCOChange,
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
            {value => <Component {...props} context={value}>
            </Component>}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };
