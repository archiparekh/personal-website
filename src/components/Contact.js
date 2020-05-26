import React, { Component } from "react"
import './Contact.css';
import linkedInIcon from '../linkedin.png';
import gitHubIcon from '../github.svg';
import mediumIcon from '../mediumIcon.webp';
import gmailIcon from '../gmail.png';
export class Contact extends Component  {
    render() {
  return (
    <div className="Contact">
        <div className="socialMediaBar">
            <a href="https://www.linkedin.com/in/archi-parekh-037939169" rel="noopener noreferrer" target="_blank">
                <img className="icon" src={linkedInIcon} alt="Linkedin Profile"/>
            </a> 
            <a href="https://github.com/archiparekh" rel="noopener noreferrer" target="_blank">
                <img className="icon" src={gitHubIcon} alt="Github Profile"/>
            </a> 
            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                <img className="icon" src={mediumIcon} alt="Medium Profile"/>
            </a> 
            <a href="mailto:archiparekh23@gmail.com rel=">
                <img className="icon" src={gmailIcon} alt="Email Address"/>
            </a> 
        </div>
    </div>
  )
    }
}
 
export default Contact;