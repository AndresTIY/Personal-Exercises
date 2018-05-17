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
      </main>
    );
  }
}

export default Main;
