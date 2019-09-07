import React from 'react'
import RoomsFilter from './RoomsFilter.js';
import RoomsList from './RoomsList';
import { higherOrderComponentRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default higherOrderComponentRoomConsumer(RoomContainer);



// import React from 'react'
// import RoomsFilter from './RoomsFilter.js';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {loading, sortedRooms, rooms} = value;
//                     // More deconstructing!!!
//                     // we're getting the value from Line 76 of context.js.
//                     // value is a "render prop"????

//                     if (loading) {
//                         return <Loading />;
//                     }

//                     return (
//                         <div>
//                             <RoomsFilter room={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )}
//             }
//         </RoomConsumer>
//         // I don't quite understand this yet
//     )
// }
