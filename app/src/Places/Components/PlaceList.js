import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../Shared/Componets/UIElements/Card";

import "./PlaceList.css"
import Button from "../../Shared/Componets/FormElements/Button";


const PlaceList = props =>{
    {if(props.items.length === 0){
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Places Found.Maybe create one</h2>
                    <Button to="/places/new">Share Places</Button>
                </Card>
                
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