import React from 'react';

import { Link } from "react-router-dom";
import NoCover from './../img/no-cover.svg';


const BookContainers = (props) => {
    return (
        <div className="pagebackground">
            {props.searchText === '' ? <p className='welcometext'>Cerca<br/>il tuo libro<br />preferito</p> : <div className="searchtext"><p>Risultati relativi a: "<span>{props.searchText}</span>"</p></div>}
            <div className="page">

                {props.books.map((book) => {
                    //book's cover
                    if (book.volumeInfo.imageLinks !== undefined) {
                        var cover = book.volumeInfo.imageLinks.thumbnail
                    } else {
                        cover = NoCover
                    };

                    // book title
                    if (book.volumeInfo.title.length > 19) {
                        var title = book.volumeInfo.title.slice(0, 18) + '...'
                    } else {
                        title = book.volumeInfo.title
                    };

                    // book author
                    if (book.volumeInfo.authors === undefined) {
                        var author = 'Autore sconosciuto'
                    } else if (book.volumeInfo.authors[0].length > 23) {
                        author = book.volumeInfo.authors[0].slice(0, 20) + '...'
                    } else {
                        author = book.volumeInfo.authors[0]
                    };

                    // other data
                    let publishedDate =book.volumeInfo.publishedDate !== undefined ? book.volumeInfo.publishedDate.slice(0, 4) : '??'
                    let id = book.id

                    return (
                        <div className="bookcontainer" key={id}>
                            <Link to={`/book/${id}`} >
                                <div className="cover">
                                    <img src={cover} alt='cover' />
                                </div>
                            </Link>
                            <h4>&nbsp;{title}</h4>
                            <p>&nbsp;di {author}</p>
                            <p>&nbsp;Pubblicato nel {publishedDate}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BookContainers;