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
      </main>
    );
  }
}

export default Main;
