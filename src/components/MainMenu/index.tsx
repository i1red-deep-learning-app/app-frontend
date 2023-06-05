import React from "react";
import "./index.css";
import { Link} from "react-router-dom";


function MainMenu() {
    return (
        <div className="main-menu">
            <div className="menu-column block">
                <h2 className="block-title">Feed Forward Network</h2>
                <Link to="/feed-forward-network/create">Create Network</Link>
            </div>
            <div className="menu-column">
                <div className="menu-row block"><h2 className="block-title">Table Dataset</h2></div>
                <div className="menu-row block"><h2 className="block-title">Training Session</h2></div>
            </div>
        </div>
    )
}

export default MainMenu;