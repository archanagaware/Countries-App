import React from "react";

export interface State {
    class? : boolean
}
export default class Navbar extends React.Component<State> {
    state : State = {
      class: true,
    };
  onChange = () => {
    if (this.state.class === true) {
      this.setState({ class: false });
    } else {
      this.setState({ class: true });
    }
  };
  componentDidUpdate() {
    if (this.state.class !== true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }
  render() {
    return (
      <div className="container-fluid navbar">
      <div className="container">
      <nav className="topnav" id="myTopnav">
        <button  className="pull-left">
          Where In The World?
        </button>
        <button onClick={this.onChange} className="pull-right">
          Dark Mode
        </button>
      </nav>
      </div>
      </div>
    );
  }
}
