import React  from 'react';

export default function Quotes(props)
{
    const[status, setStatus]=React.useState(false);
    
    const handleOnClick=()=>
    {
        setStatus(prev=>!prev);
    }
    
    return(
        <div>
             <div className='div-tag'>
                <h3 className='head-tag'>{props.heading}</h3>
                {status && <p className='message-tag'>{props.message}</p>}
                <div className='btn-div'><button type='button' className='btn-tag' onClick={handleOnClick}>{status ?"Hide":"Show"} quote</button></div>
            </div>
        </div>
    )
}