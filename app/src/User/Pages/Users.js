import React from 'react'
import UserList from '../Components/UserList'

function Users() {
  const USER=[
    {
    id:'u1',
    image:"http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
    name:"Max Schwarz",
    places:"3"
  }
]
  return (
    <UserList items={USER}/>
  )
}

export default Users