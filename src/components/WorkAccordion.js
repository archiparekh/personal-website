import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './WorkAccordion.css';
import { Container } from 'react-bootstrap';
class WorkAccordion extends Component {
  render() {
    return (
      <div className="WorkAccordion">
        <Container>
          <Accordion
            preExpanded={["mecovery"]}
            allowZeroExpanded="true"
          >
            <AccordionItem uuid="mecovery" >
              <AccordionItemHeading>
                <AccordionItemButton>
                  MeCovery @MCA
                    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                A wearable physical therapy assistant which alerts patients when they are overexerting their joints. Built using Arduino Circuit Playground, Android Studio, and 3D printing. 
                    </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Quality Assurance Intern @CognitionIP
                    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Tests codebase
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