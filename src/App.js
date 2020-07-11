import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Footer from './containers/footer';
import Search from './containers/search';
import BookContainers from './containers/bookcontainers';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchText: '',
    }
  }

  getBooks = async (e) => {  // API request with AXIOS
    e.preventDefault();
    let research = e.target.bookName.value;
    e.target.bookName.value = '';  // clears the search bar
    const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + research);
    this.setState({ books: [...res.data.items], searchText: research });
  }

  render() {
    return (
      <div>

        <header>
          <h1>DREAMBOO<span>K</span></h1>
          <div className="decorationheader"></div>
          <Search getBooks={this.getBooks} />
        </header>

        <BookContainers books={this.state.books} searchText={this.state.searchText} />

        <Footer />
        
      </div>
    )
  }
}

export default App;
