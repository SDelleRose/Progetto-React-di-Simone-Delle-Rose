import React from 'react';

import Lens from './../img/search.svg';


const Search = (props) => {
    return (
        <form className="searchbook" onSubmit={props.getBooks}>
            <button className="searchbutton" type="submit"><img src={Lens} alt="cerca" /></button>
            <input className="searchinput" type="text" placeholder="Cosa stai cercando?" name="bookName" required />
        </form>
    )
}

export default Search;