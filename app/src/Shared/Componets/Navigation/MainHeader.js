import React from "react";

import "./MainHeader.css"

const MainHeader = props =>{
    return (
        <ul className="main-header">{props.children}</ul>
    )
}

export default MainHeader;