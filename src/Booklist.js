import React, { Component } from "react";
import Book from "./Book";
import BooksData from "./BooksData";
export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = { books: BooksData };
  }

  render() {
    // const books = this.state.books.map(item => item.book);

    // console.log(this.props
    return (
      <section>
        <h3>This is our Booklist</h3>
        {this.state.books.map((item, index) => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
