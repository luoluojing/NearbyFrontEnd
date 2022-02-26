import React, { useState } from "react";
import TopBar from "./TopBar";
import Main from "./Main";

import { TOKEN_KEY } from "../constants";
import "../styles/App.css";


function App() {
    //
    //cannot set default value to be true or false, cause I don't know yet
    // F ---------------> B
    // Login -(request)->
    //  <------(res,token)---
    // Local storage (FrontEnd)  vs session storage(close tab it would expired)
    // isLoggedIn state  -- based on localStorage has token or not
    // local Storage provided by window. window.localStorage,
    // local Storage has key-value pair. function: getItem, removeItem, setItem
    // window function is treated as global variable
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem(TOKEN_KEY) ? true : false
    );

    const logout = () => {
        console.log("log out");
        localStorage.removeItem(TOKEN_KEY);
        setIsLoggedIn(false);
    };

    const loggedIn = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setIsLoggedIn(true);
        }
    };
    return (
        <div className="App">
            <TopBar isLoggedIn={isLoggedIn} handleLogout={logout} />
            <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
        </div>
    );
}

export default App;
