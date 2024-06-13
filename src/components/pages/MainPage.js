import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar";
import ch1 from "../pics/choice/family-friendly.webp" 
import ch2 from "../pics/choice/ready-to-cook.webp"
import ch3 from "../pics/choice/desserts.webp"
import ch4 from "../pics/choice/prepped-and-ready-tile.webp"
import ch5 from "../pics/choice/breakfast.webp"
import temp1 from "../pics/templates/1.jpg"

const MainPage = () => { 

    return (
      <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Intro */}
            <div className="introCon">
              <h1>Chefs's Kiss</h1>
              <p>One stop shop to all of your Culinary Desire</p>
            </div>

            {/* Temp */}
            <div className="tempCon">
              <div className="tempImage">
                <img src={temp1} alt="Prepared & Ready Meals"></img>
              </div>
              <div className="tempContent">
                <p>Prepared & Ready</p>
                <p>Get pre-made meals delivered fresh with top-quality ingredients at just $5.00.</p>
                <button>Try Now!</button>
              </div>
            </div>

            {/* choices */}
            <div className="choiceIntro">
              <p>Your Pick</p>
            </div>

            <div className="choicesCon">

              <div class="choicesCon">
                <div class="choiceCard">
                  <img src={ch1} alt="Mafalda Pasta"></img>
                  <p class="title">Mafalda Pasta</p>
                  <p class="subtitle">Pasta Goodness</p>
                </div>

                <div class="choiceCard">
                  <img src={ch2} alt="Mafalda Pasta"></img>
                  <p class="title">Pesto Chicken and Orzo</p>
                  <p class="subtitle">Ready To Cook</p>
                </div>

                <div class="choiceCard">
                  <img src={ch3} alt="Mafalda Pasta"></img>
                  <p class="title">Flourless Chocolate Cake</p>
                  <p class="subtitle">Desserts</p>
                </div>

                <div class="choiceCard">
                  <img src={ch4} alt="Mafalda Pasta"></img>
                  <p class="title">Chicken Parmesan</p>
                  <p class="subtitle">Prepped and Ready</p>
                </div>

                <div class="choiceCard">
                  <img src={ch5} alt="Mafalda Pasta"></img>
                  <p class="title">Fried Egg & Bacon</p>
                  <p class="subtitle">Breakfast</p>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="optionIntro">
              <p>More than 50+ Options</p>
            </div>
            
        </div>
      </>
    )
}

export default MainPage;