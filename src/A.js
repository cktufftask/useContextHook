import React from 'react'
import B from './B';
import C from './C';
import { DataContext } from './context/DataContext';


const  A=()=> {
    const [value]  = React.useContext(DataContext); 
  
    return (
        <div className="theme1">
            <label>A Component</label>
            <br/>
            {value}
            <br/>
            <B />
            <br/>
            <C />
            
        </div>
    )
}
export default A;
