import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Footer from './footer';
import NoCover from './../img/no-cover.svg';



class AboutSingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = { book: [] }
    }

    async componentDidMount() {  // Get a single book with request API
        let id = this.props.match.params.id
        const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + id);
        this.setState({ book: [res.data.items[0]] });
    }

    render() {
        const book = this.state.book[0];
        return (
            <div >
                <header>
                    <h1>DREAMBOO<span>K</span></h1>
                    <div className="decorationheader"></div>
                    <Link to='/' className='homebutton'>- HOME -</Link>
                </header>

                <div className="pagebackground">
                    
                        {book === undefined ? '' :
                            <div className="page bookpage">

                                <div className="coverbookpage">
                                    <img src={book.volumeInfo.imageLinks === undefined ? NoCover : book.volumeInfo.imageLinks.thumbnail} alt='cover' />
                                </div>

                                <div className="description">
                                    <h2>{book.volumeInfo.title}</h2>
                                    <p>di {book.volumeInfo.authors === undefined ? 'Autore sconosciuto' : book.volumeInfo.authors.join(', ')}</p>
                                    <p>Pubblicato nel {book.volumeInfo.publishedDate.slice(0, 4)}</p>
                                    <br/>
                                    <h3><em>Trama</em></h3>
                                    <p>{book.volumeInfo.description === undefined ? <em>~Descrizione non presente in archivio~</em> : book.volumeInfo.description}</p>
                                    <br/>
                                    <a href={book.volumeInfo.infoLink} target='_blank'>More info</a>
                                </div>
                            </div>
                        }
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutSingleBook;