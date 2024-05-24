import React, {useState} from "react";
import { Link } from "react-router-dom";



import MainHeader from "./MainHeader";
import Backdrop from "../../Shared/Componets/UIElements/Backdrop"
// import SideDrawe

import "./MainNavigation.css"
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const Mainavigation = props =>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHanlder = ()=>{
        setDrawerIsOpen(true);
    }
    const closeDrawerHanlder = ()=>{
        setDrawerIsOpen(false);
    }
   
    return (
        <React.Fragment>
            
            {drawerIsOpen && <Backdrop onClick={closeDrawerHanlder}/>}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHanlder}>
                <nav className="main-navigation__drawer-nav">
                <NavLinks/>
                </nav>
                
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHanlder} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>  
                <h1 className="main-navigation__title"> 
                    <Link to="/">Places</Link>
                </h1>
                <nav className="main-navigation__header-nav"> 
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
        
       
    )
}

export default Mainavigation;