import React from 'react';
import './Book1.css';
function Book() {
    return(
        <div className="Book1">
            <a><span className='Name'>Name: </span>War of the Worlds</a><br/>
            <a><span className='Name'>Author: </span>Herbert George Wells</a><br/>
            <a><span className='Name'>Genre: </span>Science fiction</a><br/>
            <a><span className='Name'>Number of pages: </span>287</a><br/>
            <a><span className='Name'>Review: </span>The War of the Worlds starts off smashingly. HG Wells doesn't need a 100-page warm up. The action starts flowing from the start. Also, there are some very humorous bits. It is quite easy to see how with the humor amplified, this could turn into The Hitchhiker's Guide to the Galaxy.</a><br/>
            <hr/>
            <br/>
        </div>
    )
}

export default Book;