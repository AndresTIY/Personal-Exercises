import React from "react";
import dres_icon from "../../images/dres_icon.png";
import loadRuns from "../actions/load_runs.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadRuns());
  }

  render() {
    const runs = this.props.runs;

    return (
      <main>
        <div className="intro">
          <h5>Hi, this is Dres, your Favor Runner</h5>
          <img src={dres_icon} />
        </div>
        <div className="promo-code">
          <p className="promo-text">
            If this is your first time using Favor, use this code to get your
            Delivery Fee waived!
          </p>
          <h3>EMILC8T</h3>
          <p className="disclaimer-text">
            (It must be the only promo code being used)
          </p>
        </div>
        <div className="promo-wknd">
          <p className="promo-explained">
            From Thursday till Sunday, Favor is running a promo for us runners.
            The more runs we do, the more cash bonus we get. The tiers are 15,
            25, 50, and 70 favors.
          </p>
          <h5>70 is my goal!</h5>
        </div>
        <div className="cust-number">
          <p className="cust-text">Right now you are: </p>
          <h3>{runs}</h3>
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(Main);
