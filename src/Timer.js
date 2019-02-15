import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 15
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      
      <div>      
      Seconds: {this.state.seconds >= 0 ? this.state.seconds : 0} 
      </div>
    );
  }
}

export default Timer