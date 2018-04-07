import api from "../api.js";

// export const REQUEST_FOLLOW_ITEMS = 'REQUEST_FOLLOW_ITEMS';

export default function loadMovies() {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/discussion`,
      method: "GET",
      dataType: "JSON",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(function(movies, success, xhr) {
      dispatch({ type: "LOAD_MOVIES", movies: movies.data });
    });
  };
}
// https://api.backendless.com/v1/data/discussion
