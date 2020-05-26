import React from "react"
import { Link } from 'react-router-dom';

function InfoBlock(props) {
    //let props contain title, content, links
  function AddLink(props){
    if (props.link !== undefined){
    return(
    <Link to={props.link}>Learn more→</Link>
    );
    }
    return null;
  }
  return (
    <div>
      <h1 className="info-titles">{props.title}</h1>
      <p className="info-content">{props.content} 
      <AddLink link={props.link} />
      </p>
    </div>
  )
}
 
export default InfoBlock;