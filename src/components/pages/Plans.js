import React from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import Footer from "../Footer"
import pl1 from "../pics/menu/6.webp"
import pl2 from "../pics/menu/9.webp"
import pl3 from "../pics/menu/2.webp"
import pl4 from "../pics/menu/5.webp"

const Plans = () => { 

    const plans = [
        { image: pl1, price: 'Free Trail', des: 'Try out our service for a week!' },
        { image: pl2, price: '$10.00 / Single Meal', des: 'A single package fulling meal for One' },
        { image: pl3, price: '$20.00 / Duo Meal', des: 'A Duo package meal for Two to share' },
        { image: pl4, price: '$59.99 / Family Plan', des: 'A plan for the entire family to enjoy' },
    ];

    return (
        <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Plans */}
            <div className="planCon">
              <p>Available Plans</p>
            </div>

            <div className="plansCon">
                <div className="innerPlanCon">
                    {plans.map((plan, index) => (
                        <div className="card" key={index}>
                            <img src={plan.image} alt={`Plan ${index + 1}`} className="planImage" />
                            <div className="planPrice">{plan.price}</div>
                            <div className="planDes">{plan.des}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer></Footer>

        </div>
        </>
    )
}

export default Plans;