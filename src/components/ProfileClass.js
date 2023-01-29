import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    // create state variables here
    this.state = {
      count: 1,
      count2: 1,
      userInfo: null,
    };
  }

  async componentDidMount() {
    console.log("did mount");
    const data = await fetch("https://api.github.com/users/madaanankit");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("did unmount");
  }

  render() {
    console.log("rendering...");
    return (
      <div>
        <h1>Profile Class Component!</h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <h2>Name : {this.state.userInfo?.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <h2>Count2 : {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default Profile;
