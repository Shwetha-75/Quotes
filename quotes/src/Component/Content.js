import React from 'react';
import NavBar from './NavBar';
import Quotes from './Quotes';
import Data from './data';
export default function Content()
{
    const array=Data.map((item)=>{
        return(
            <Quotes
            heading={item.heading}
            message={item.message}
            />
        )
    }
    )
    return(
        <div>
            <div>
                <NavBar/>
                <div className='cont-tag'>
                   {array}
                </div>
            </div>
        </div>
    )
} 