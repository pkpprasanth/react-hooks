import React from 'react'
import Context from './Context';


const Data = () => {
    const blogDetails = React.useContext(Context);
    return (
   <div>
    <h3>React Blog Details</h3>
    <p>Topic: {blogDetails.React.post}</p>
    <p>Author: {blogDetails.React.author}</p>
  </div>  
    )
}
export default Data;
