import React from "react";
import { connect } from "react-redux";
import container from "../containers/all";

import movieListItem from "./movieListItem";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movies = this.props;
    console.log("MOVIES", movies);
    return (
      <div>
        <movieListItem />
      </div>
    );
  }
}

export default connect(container.allState)(Main);
// <FeaturedMovie movie={this.props.movies} />
