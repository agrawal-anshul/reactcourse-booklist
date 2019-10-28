//arrow functions donot create their own context,but normal functions do...so their this is different from the parents THIS
//therefore we need to bind the context of the  child function(chil functions THIS) with the parent class' THIS.
//in cae of arrow functions we donot need to bind anything.

import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 1
    };
  }

  // handleClick() {
  //   console.log("You clicked me!");
  //   console.log(this.state.count);
  // }
  addCount = () => {
    // this.state = {
    //   count: this.state.count + 1
    //   //STAtE is immutable!!!!!!...use this.setState()
    // };
    // // console.log(this.state.count);

    this.setState({ count: this.state.count + 1 });
  };

  lowerCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const borderStyle = { border: "1px soild black" };
    // console.log(this.props);
    const { img, title, author } = this.props.info;

    return (
      <article className="book">
        <img src={img} width="150" alt="book" style={borderStyle} />
        <div>
          <h3>Book:{title}</h3>
          <h5>Author:{author}</h5>
          <h3>Count: {this.state.count}</h3>
          <button type="button" onClick={this.addCount}>
            Add Count
          </button>
          <button type="button" onClick={this.lowerCount}>
            Lower Count
          </button>
          <button type="button" onClick={this.resetCount}>
            Reset Count
          </button>
        </div>
      </article>
    );
  }
}
