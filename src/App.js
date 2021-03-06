import React, { Component } from "react";
import { Provider } from "react-redux";
import Siderbar from "./components/Sidebar";
import Video from "./components/Video";

import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Siderbar />
          <Video />
        </Provider>
      </div>
    );
  }
}

export default App;
