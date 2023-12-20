import React from 'react';
import './Overview2.css'; // Ensure this file is in the same directory
import { Slide } from 'react-awesome-reveal';
import { Button } from 'reactstrap';
const Overview2 = () => {
  return (
    <div className="Overview2-section">
      
      <div className="Overview2-columns-container">
        <div className="Overview2-left-content-text">
            <Slide delay={1}>
            <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. </p>
            <p>
            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
            </Slide>
        </div>
        <div className="Overview2-right-content-text">
          <h3>
          <Slide delay={0.9} >
              <div className='clicktoresult'>
                <button>Start The Questionnaire</button>
              </div>
          </Slide>
          </h3>
          
        </div>
      </div>
    </div>
  );
};

export default Overview2;