import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SavedBookDetail from "../components/SavedBookDetail";
import { Link } from "react-router-dom";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState(
        { 
          books: res.data 
        },
        console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }

  // loads all books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // deletes a book
  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card >
                {this.state.books.map(book => (
                  <SavedBookDetail
                    key={book._id}
                    src={book 
                      ? book.src 
                      : ""}
                    title={book.title}
                    authors={book.authors.join(", ")}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteBook={() => this.handleDeleteBook(book._id)}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Saved Books"></Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedBooks;
