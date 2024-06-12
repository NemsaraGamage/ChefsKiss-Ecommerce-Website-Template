import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar"; 

const MainPage = () => { 

    return (
      <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            <div className="introCon">
              <h1>Chefs's Kiss</h1>
              <p>One stop shop to all of your Culinary Desire</p>
            </div>
            
        </div>
      </>
    )
}

export default MainPage;