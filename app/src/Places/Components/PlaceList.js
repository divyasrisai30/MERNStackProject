import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../Shared/Componets/UIElements/Card";

import "./PlaceList.css"


const PlaceList = props =>{
    {if(props.items.length === 0){
        return (
            <div className="place-list center">
                <Card>No Places Found.Maybe create one</Card>
            </div>
        )
    }}
    return (
        <ul className="place-list">
            {props.items.map(place => <PlaceItem key={place.id} id={place.id} image={place.image} title={place.title} description={place.description} address={place.address} creatorId={place.creator} coordinates={place.location}/>)}
        </ul>
    )
}

export default PlaceList;