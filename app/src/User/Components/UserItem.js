import React from 'react'
import Avatar from '../../Shared/Componets/UIElements/Avatar'
import Card from '../../Shared/Componets/UIElements/Card'

import "./UserItem.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { Card } from "../../Shared/Componets/UIElements/Card"


export default function UserItem(props) {
  return (
   <li className='user-item'>
        <Card className='user-item__content'>
            <Link to="/{`/${props.id}/places`}">
            <div className='user-item__image'>
                    <Avatar src={props.image} ait={props.name} ></Avatar>
                    {/* <img src={props.image} alt={props.name}/> */}
                </div>
                <div className='user-item__info'>
                    <h2>{props.name}</h2>
                    <h3>
                        {props.placeCount}{props.placeCount === 1 ? 'Place': "Places"}
                    </h3>
                </div>
            </Link>
        </Card>
    
   </li>
  )
}
