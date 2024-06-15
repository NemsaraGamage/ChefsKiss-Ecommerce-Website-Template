import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar";
import ch1 from "../pics/choice/family-friendly.webp" 
import ch2 from "../pics/choice/ready-to-cook.webp"
import ch3 from "../pics/choice/desserts.webp"
import ch4 from "../pics/choice/prepped-and-ready-tile.webp"
import ch5 from "../pics/choice/breakfast.webp"
import ch6 from "../pics/choice/fast-and-easy.webp"
import temp1 from "../pics/templates/1.jpg"
import op1 from "../pics/options/1.webp"
import op2 from "../pics/options/2.webp"
import op3 from "../pics/options/3.webp"
import op4 from "../pics/options/4.webp"
import op5 from "../pics/options/5.webp"
import op6 from "../pics/options/6.webp"
import op7 from "../pics/options/7.webp"
import op8 from "../pics/options/8.webp"
import op9 from "../pics/options/9.webp"
import op10 from "../pics/options/10.webp"
import pos1 from "../pics/poster/p1.jpg"
import pos2 from "../pics/poster/p2.jpg"
import carl1 from "../pics/carsoul/1.webp"
import carl2 from "../pics/carsoul/2.webp"
import carl3 from "../pics/carsoul/3.webp"
import Footer from "../Footer"
import chefLogo from '../pics/logo2.png';
import menuPage from './Menu'
import { useNavigate } from 'react-router-dom';

const MainPage = () => { 

  const navigate = useNavigate();

  const menuPage = () => {
    navigate('/menu'); 
  };

    return (
      <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Intro */}
            <div className="introCon">
              <img src={chefLogo}></img>
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
              <p>Take Your Pick</p>
            </div>

            <div class="choicesCon">
              <div class="choiceCard">
                <img src={ch1} alt="Pasta Goodness"></img>
                <p class="title">Pasta Goodness</p>
              </div>

              <div class="choiceCard">
                <img src={ch2} alt="Ready To Cook"></img>
                <p class="title">Ready To Cook</p>
              </div>

              <div class="choiceCard">
                <img src={ch3} alt="Desserts"></img>
                <p class="title">Desserts</p>
              </div>

              <div class="choiceCard">
                <img src={ch4} alt="Prepped and Ready"></img>
                <p class="title">Prepped and Ready</p>
              </div>

              <div class="choiceCard">
                <img src={ch5} alt="Breakfast"></img>
                <p class="title">Breakfast</p>
              </div>

              <div class="choiceCard">
                <img src={ch6} alt="FAST & EASY"></img>
                <p class="title">Fast & Easy</p>
              </div>
            </div>

            {/* Options */}
            <div className="optionIntro">
              <p>More than 50+ Dishes</p>
            </div>

            <div class="optionCon">

              <div class="optionCard">
                <img src={op1} alt="option img"></img>
                <p class="title">Honey Mustard Pork Chops & Brussels Sprouts</p>
                <p class="subtitle">with Sautéed Apple & Kale</p>
              </div>

              <div class="optionCard">
                <img src={op2} alt="option img"></img>
                <p class="title">Seared Steaks & Soy Glaze</p>
                <p class="subtitle">with Mashed Potatoes & Togarashi Vegetables</p>
              </div>

              <div class="optionCard">
                <img src={op3} alt="option img"></img>
                <p class="title">Spicy Shrimp Lo Mein</p>
                <p class="subtitle">with Carrots & Bok Choy</p>
              </div>

              <div class="optionCard">
                <img src={op4} alt="option img"></img>
                <p class="title">Pesto Gnocchi & Hot Italian Sausage</p>
                <p class="subtitle">with Mushrooms & Mozzarella</p>
              </div>

              <div class="optionCard">
                <img src={op5} alt="option img"></img>
                <p class="title">Chicken, Peach & Kale Salad</p>
                <p class="subtitle">with Sesame-Dijon Dressing</p>
              </div>

              <div class="optionCard">
                <img src={op6} alt="option img"></img>
                <p class="title">Sweet Pepper Grilled Cheese</p>
                <p class="subtitle">with Romaine & Peach Salad</p>
              </div>

              <div class="optionCard">
                <img src={op7} alt="option img"></img>
                <p class="title">BLT Dry-Aged Beef Cheeseburgers</p>
                <p class="subtitle">with Garlic & Herb Corn on the Cob</p>
              </div>

              <div class="optionCard">
                <img src={op8} alt="option img"></img>
                <p class="title">Crispy Korean-Style Chicken</p>
                <p class="subtitle">with Rice, Kimchi & Sesame Seeds</p>
              </div>

              <div class="optionCard">
                <img src={op9} alt="option img"></img>
                <p class="title">Italian Chicken & Pepper Pan Sauce</p>
                <p class="subtitle">with Mashed Potatoes & Green Beans</p>
              </div>

              <div class="optionCard">
                <img src={op10} alt="option img"></img>
                <p class="title">Beef Enchiladas Rojas</p>
                <p class="subtitle">with Poblano Pepper & Cheese</p>
              </div>
            </div>

            <div className="optionButton">
            <button onClick={menuPage}>More on The Menu</button>
            </div>

            {/* Poster */}
            <div className="optionIntro">
              <p>Special Weekly Offers</p>
            </div>

            <div className="posterCon">
              <div>
                <img src={pos1} alt="Poster 1" />
              </div>
              <div>
                <img src={pos2} alt="Poster 2" />
              </div>
            </div>

            {/* satisfaction Delivery */}
            <div className="satisCon">
              <h1>Delivery</h1>
              <p>Quick &#9733; Simple &#9733; Delicious</p>
            </div>

            {/* Newsletter */}
            <div className="newsCon">
              <h3>Join Our Newsletter!</h3>
              <p>Subscribe to our newsletter to stay updated on the latest news and offers!</p>
              <form className="newsletterForm">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            {/* Footer */}
            <Footer></Footer>
            
        </div>
      </>
    )
}

export default MainPage;