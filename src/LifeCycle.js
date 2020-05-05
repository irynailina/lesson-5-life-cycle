import React, { Component } from "react";

const num = 10;

class LifeCycle extends Component {
  // ===before use application====

  // constructor(props) {
  //   console.log("comstructor");
  //   super(props);
  //   this.state = { counter: 0 };
  // }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // ===after update application===
  state = {
    counter: 1,
    isShow: true
  };

  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   console.log("shouldComponentUpdate");

  //   if (nextState.counter > 5) {
  //     return false;
  //   }
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate');
  // }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      counter: num
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log('prevState', prevState);
    console.log('prevProos', this.state);
    if (prevState.counter === this.state.counter) {
      console.log('то же самое');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  counter = () => {
    this.setState((prev) => ({
      counter: 12,
    }));
  };

  // static getDerivedStateFromProps(props, state) {
  //   // console.log('props', props);
  //   // console.log('state', state);
  //   // console.log('getDerivedStateFromProps');
  //   // return state.counter ? {} : {counter: num}
  //   return {}
  // }

  handleHideModal = () => {
    this.setState({
      isShow: false
    })
  }

  render() {
    console.log("---render---");
    return (
      <>
       {this.state.isShow && <h2>{this.state.counter}</h2>} 
       <button onClick={this.handleHideModal}>HIDE</button>
        <button onClick={this.counter}>Counter</button>
      </>
    );
  }
}

export default LifeCycle;
