import React from "react";
import './Header.css';

const Header =({handleDarkMode})=>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>handleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Toggle Mode</button>
        </div>
    )
}

export default Header;