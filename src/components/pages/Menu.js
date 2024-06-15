import React from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
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
import Footer from "../Footer"
import m1 from "../pics/menu/1.webp"
import m2 from "../pics/menu/2.webp"
import m3 from "../pics/menu/3.webp"
import m4 from "../pics/menu/4.webp"
import m5 from "../pics/menu/5.webp"
import m6 from "../pics/menu/6.webp"
import m7 from "../pics/menu/7.webp"
import m8 from "../pics/menu/8.webp"
import m9 from "../pics/menu/9.webp"
import m10 from "../pics/menu/10.webp"
import { useNavigate } from 'react-router-dom';

const Menu = () => { 

    const navigate = useNavigate();

    const planPage = () => {
        navigate('/plan'); 
    };

    return (
        <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Menu */}
            <div className="menuCon">
              <p>On the Menu Now</p>
            </div>

            <div class="optionCon">
                <div class="optionCard">
                <img src={op1} alt="menu img"></img>
                <p class="title">Honey Mustard Pork Chops & Brussels Sprouts</p>
                <p class="subtitle">with Sautéed Apple & Kale</p>
                </div>

                <div class="optionCard">
                <img src={op2} alt="menu img"></img>
                <p class="title">Seared Steaks & Soy Glaze</p>
                <p class="subtitle">with Mashed Potatoes & Togarashi Vegetables</p>
                </div>

                <div class="optionCard">
                <img src={op3} alt="menu img"></img>
                <p class="title">Spicy Shrimp Lo Mein</p>
                <p class="subtitle">with Carrots & Bok Choy</p>
                </div>

                <div class="optionCard">
                <img src={op4} alt="menu img"></img>
                <p class="title">Pesto Gnocchi & Hot Italian Sausage</p>
                <p class="subtitle">with Mushrooms & Mozzarella</p>
                </div>

                <div class="optionCard">
                <img src={op5} alt="menu img"></img>
                <p class="title">Chicken, Peach & Kale Salad</p>
                <p class="subtitle">with Sesame-Dijon Dressing</p>
                </div>

                <div class="optionCard">
                <img src={op6} alt="menu img"></img>
                <p class="title">Sweet Pepper Grilled Cheese</p>
                <p class="subtitle">with Romaine & Peach Salad</p>
                </div>

                <div class="optionCard">
                <img src={op7} alt="menu img"></img>
                <p class="title">BLT Dry-Aged Beef Cheeseburgers</p>
                <p class="subtitle">with Garlic & Herb Corn on the Cob</p>
                </div>

                <div class="optionCard">
                <img src={op8} alt="menu img"></img>
                <p class="title">Crispy Korean-Style Chicken</p>
                <p class="subtitle">with Rice, Kimchi & Sesame Seeds</p>
                </div>

                <div class="optionCard">
                <img src={op9} alt="menu img"></img>
                <p class="title">Italian Chicken & Pepper Pan Sauce</p>
                <p class="subtitle">with Mashed Potatoes & Green Beans</p>
                </div>

                <div class="optionCard">
                <img src={op10} alt="menu img"></img>
                <p class="title">Beef Enchiladas Rojas</p>
                <p class="subtitle">with Poblano Pepper & Cheese</p>
                </div>
            </div>

            {/* Updated weekly */}
            <div className="weeklyIntro">
                <p><a>&#9733;&#9733;</a>Updated Weekly<a>&#9733;&#9733;</a></p>
            </div>

            <div class="optionCon">
                <div class="optionCard">
                <img src={m1} alt="menu img"></img>
                <p class="title">Goat Cheese & Mushroom Pan Pizza</p>
                <p class="subtitle">with Butter Lettuce Salad & Almonds</p>
                </div>

                <div class="optionCard">
                <img src={m2} alt="menu img"></img>
                <p class="title">Peanut Udon Stir-Fry</p>
                <p class="subtitle">with Snow Peas, Mushrooms & Fried Eggs</p>
                </div>

                <div class="optionCard">
                <img src={m3} alt="menu img"></img>
                <p class="title">Miso-Maple Chicken Thighs & Rice</p>
                <p class="subtitle">with Mushroom & Spinach</p>
                </div>

                <div class="optionCard">
                <img src={m4} alt="menu img"></img>
                <p class="title">Italian-Style Chicken & Zucchini</p>
                <p class="subtitle">with Pesto-Pepper Rice</p>
                </div>

                <div class="optionCard">
                <img src={m5} alt="menu img"></img>
                <p class="title">Cheesy Tomato Gnocchi</p>
                <p class="subtitle">with Calabrian Chile & Spinach</p>
                </div>

                <div class="optionCard">
                <img src={m6} alt="menu img"></img>
                <p class="title">Southern Pork Roast & Corn Cakes</p>
                <p class="subtitle">with Green Beans & Creamy Honey Mustard</p>
                </div>

                <div class="optionCard">
                <img src={m7} alt="menu img"></img>
                <p class="title">Seared Steaks & Buffalo Corn on the Cob</p>
                <p class="subtitle">with Scallion Mashed Potatoes</p>
                </div>

                <div class="optionCard">
                <img src={m8} alt="menu img"></img>
                <p class="title">Shawarma Chicken & Couscous</p>
                <p class="subtitle">with Marinated Vegetables & Honey Mustard</p>
                </div>

                <div class="optionCard">
                <img src={m9} alt="menu img"></img>
                <p class="title">Hoisin-Glazed Pork Meatloaf</p>
                <p class="subtitle">with Sesame Mashed Potatoes & Bok Choy</p>
                </div>

                <div class="optionCard">
                <img src={m10} alt="menu img"></img>
                <p class="title">Korean-Style Beef & Rice Bowls</p>
                <p class="subtitle">with Vegetables & Fried Eggs</p>
                </div>
            </div>
            
            <div className="optionButton">
              <button onClick={planPage}>Check Available Plans</button>
            </div>

            {/* Footer */}
            <Footer></Footer>

        </div>

        </>
    )
}

export default Menu;