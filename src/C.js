import React from 'react'
import { DataContext } from './context/DataContext';

const  C=(props)=> {
    const [value]  = React.useContext(DataContext); 
    return (
        <div className="theme3">
             {value}
            <br/>
           
            <label>C Component</label>
        </div>
    )
}
export default C;
