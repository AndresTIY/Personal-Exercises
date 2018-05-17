import api from "../api.js";

export default function loadRuns() {
  return function(dispatch) {
    $.ajax({
      url: api.apiUrl,
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(function(data, success, xhr) {
      console.log("DATA", data);
      dispatch({ type: "LOAD_RUNS", data: data[0].runs });
    });
  };
}
