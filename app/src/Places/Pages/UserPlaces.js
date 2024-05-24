import React from "react";

import PlaceList from "../Components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const DUMMY_PLACES = [
    { //array of objects
    id: 'p1',
    title: "Empire state Building",
    description:"The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931.",
    imageUrl: "https://www.google.com/imgres?q=empire%20state%20building&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FEmpire_State_Building_%2528aerial_view%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&docid=XfQII-lYE0auyM&tbnid=QiJPq55a7Ph-KM&vet=12ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA..i&w=846&h=1270&hcb=2&ved=2ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA",
    address:"20 W 34th St., New York, NY 10001",
    location:{
        lat: 40.7508102,
        lng: -73.9898989
    },
    creator: "u1"
},
{ //array of objects
    id: 'p2',
    title: "Empire state Building",
    description:"The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931.",
    imageUrl: "https://www.google.com/imgres?q=empire%20state%20building&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FEmpire_State_Building_%2528aerial_view%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&docid=XfQII-lYE0auyM&tbnid=QiJPq55a7Ph-KM&vet=12ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA..i&w=846&h=1270&hcb=2&ved=2ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA",
    address:"20 W 34th St., New York, NY 10001",
    location:{
        lat: 40.7508102,
        lng: -73.9898989
    },
    creator: "u2"
}
]
const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator ===userId);
    return (
         <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces;