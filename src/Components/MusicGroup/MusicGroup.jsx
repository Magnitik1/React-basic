import React from 'react';
import './MusicGroup.css';
function MusicGroup() {
    return(
        <div className="MusicGroup">
            <a><span className='Name'>Name: </span>My Darkest Days</a><br/><br/>
            <a><span className='Name'>Members: </span><br/>
            &nbsp;&nbsp;Matt Walst - lead vocals, guitar (2005-2013)<br/>
            &nbsp;&nbsp;Reid Henry - keyboards, backing vocals, guitar (2010-2013)<br/>
            &nbsp;&nbsp;Brendan McMillan - bass, backing vocals (2005-2013)<br/>
            &nbsp;&nbsp;Doug Oliver - drums, percussion (2005-2013)<br/>
            &nbsp;&nbsp;Sal Costa - guitar, backing vocals (2010-2012)<br/>
            &nbsp;&nbsp;Chris McMillan - guitar, backing vocals (2005-2007)<br/>
            &nbsp;&nbsp;Paulo Neta - guitar, vocals (2008-2009)</a><br/><br/>
            <a><span className='Name'>Albums: </span><br/>
            &nbsp;&nbsp;My Darkest Days(2010)<br/>
            <img src='https://upload.wikimedia.org/wikipedia/en/d/da/Mydarkestdays.jpg' alt='picture'/>
            <br/><br/>
            &nbsp;&nbsp;Sick and Twisted Affair(2012)</a><br/>
            <img src='https://upload.wikimedia.org/wikipedia/en/d/d9/Sick_and_Twisted_Affair.jpg' alt='picture'/>
            <hr/>
        </div>
    )
}

export default MusicGroup;