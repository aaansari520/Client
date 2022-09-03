import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "579880221602-t26b10om9ci35fn87r6cfm8cnqhrilo9.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "Streamy",
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
