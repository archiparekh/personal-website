import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './styles/WorkAccordion.css';
import { Container } from 'react-bootstrap';
class WorkAccordion extends Component {
  render() {
    return (
      <div className="WorkAccordion">
        <Container>
          <Accordion
            preExpanded={[]}
            allowZeroExpanded="true"
          >
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Quality Assurance Intern @ Cognition IP
                    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  As a Quality Assurance Intern at Cognition IP, I test frontend and backend code looking for what developers hate most: bugs. For some background, Cognition IP is a law-tech startup that uses technology to streamline the patent filing process. Their tools include ML tools and a portal for attorneys (which is what I work on). With engineers building and deploying new features at a rapid rate, testing the portal to ensure that there are no errors is important. 
                  <br></br>
                  <br></br>
                  Over the past 6 months, I've increased backend coverage by about 25% using Mocha and Chai. I also revamped the frontend integration testing suite using Cypress. Initially, the frontend tests were scattered and broken due to API changes. I implemented over 70 UI tests and created a mock API which served as the one source of truth for all API changes. This way, engineers could easily make changes in the actual and mock APIs without breaking many tests and navigating through many tests. 
                  <br></br>
                  <br></br>
                  When I began this internship in March, I was not familiar with web development and Cognition's tech stack: MongoDB, Express, Angular, and Node. Using the knowledge I've gained from testing the codebase, I help build features like a dashboard for the COO to visualize the workload distribution throughout the firm. 
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                  MeCovery @ MCA
                    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                MeCovery is a wearable physical therapy assistant which alerts patients when they are overexerting their joints. It was built using Arduino Circuit Playground, Android Studio, and 3D printing at Middlesex County Academy, my engineering-focused high school, as part of the Electrical and Computer Engineering Technologies Program. 
                <br></br>
                <br></br>
                Many elderly people go to physical therapy, but forget which exercises to practice on their own time. Even worse, without a therapist's careful watch, patients can hurt themselves while exercising. MeCovery measures the angle of joints in exercises (like bicep curls) and compares it to the recommended movement range set by the therapist. If the patient moves beyond the range of movement, MeCovery flashes lights and uses arrows to show the patient guide the patient back into the recommended range. 
                <br></br>
                <br></br>
                Along with the wearable, I built a simple Android application to track time spent exercising, record exercises, and view instructional videos on how to do specific exercises.
                <br></br>
                <br></br>
                When building MeCovery for my senior capstone project, I learned how to use the Arduino's accelerometer, build an Android application, and develop an intuitive, comfortable product. 
                <br></br>
                <br></br>
                Check out the code for the project here. 
                    </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  NomNom @ New Hack, Who This?
                    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Sometimes, you want to cook but you just don't know what to make. Nomnom is a web app which suggests recipes based on the user's mood. The user can choose whether they are happy, sad, anxious, angry, adventurous, or curious and get a list of quick and easy recipes from Buzzfeed Tasty. I built this project with my younger sister using React.js, Google Maps API, and Tasty API. Working on this project taught me how to use Javascript's fetch API and UI/UX design. 

                  Check out the project here: 
                    </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </div>
    );
  }
}

export default WorkAccordion;