import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 15,
    };
  }

  tick() {
    if(this.state.seconds !== 0) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }));
      this.props.onTick()
    }
    else {
      this.setState({
        seconds: 0
      })
      this.props.onTimeOut()
      clearInterval(this.interval)
    }
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
      Seconds: {this.state.seconds} 
      </div>
    );
  }
}

export default Timer