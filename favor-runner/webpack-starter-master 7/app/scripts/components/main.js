import React from "react";
import dres_icon from "../../images/dres_icon.png";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="intro">
          <h5>Hi, this is Dres, your Favor Runner</h5>
          <img src={dres_icon} />
        </div>
        <div className="promo-code">
          <p className="promo-text">
            If this is your first time using Favor, use this code in order to
            get your Delivery Fee waived!
          </p>
          <h5>EMILC8T</h5>
          <p className="disclaimer-text">
            (It must be the only promo code being used)
          </p>
        </div>
        <div className="promo-wknd">
          <p className="promo-explained">
            From Thursday 11am until Sunday 11:59pm, Favor is running a
            promotion for us runners. Essentially the more runs we do, the more
            cash bonus we get. The tiers are 15, 25, 50, and 70.
          </p>
          <h5>70 is my goal!</h5>
        </div>
        <div className="cust-number">
          <p className="cust-text">Right now you are: </p>
          <h5>10</h5>
        </div>
      </main>
    );
  }
}

export default Main;
