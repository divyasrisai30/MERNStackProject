import React, {useState} from "react";

import Card from "../../Shared/Componets/UIElements/Card";
import Button from "../../Shared/Componets/FormElements/Button";
import Modal from "../../Shared/Componets/UIElements/Modal";

import "./PlaceForm.css"

const PlaceItem = props =>{
    const [showMap, setShowMap] = useState(false);

    const openMapHeandler = ()=> setShowMap(true);

    const closeMapHeandler = ()=> setShowMap(false);
    return(
        <React.Fragment>
            <Modal show={showMap} 
                onCancel={closeMapHeandler} 
                header={props.address} 
                contentClass="place-item__-content"
                footerClass="place-item__-actions"
                footer={<Button onClick={closeMapHeandler}>CLOSE</Button>}>
                    <div className="map-container">
                        <h2>Map</h2>
                    </div>
                </Modal>
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.img} alt={props.title}/>
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHeandler}>VIEW IN MAP</Button>
                    <Button to={`/places/${props.id}`}>EDIT</Button>
                    <Button danger>DELETE</Button>
                </div>
            </Card>
        </li>
        </React.Fragment>
    )
    
    
}

export default PlaceItem;