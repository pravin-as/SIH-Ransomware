import React from 'react';
import './Overview.css'; // Ensure this file is in the same directory
import { Bounce, Slide } from 'react-awesome-reveal';
import Card from './Card';

const Overview = () => {
  return (
    <div className="Overview-section">
      <div className="columns-container">
        <div className="right-content-text">
        <Slide cascade triggerOnce delay={0.1}>
          <div>
          <h3>Let Your Data Take Your Business to Higher Grounds</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
            Text” or double click me to add your own content and make changes to the font.
          </p>
          </div>
        </Slide>
        </div>
        <div className="left-content-text">
          <div className="card-container">
            <div className="column upper-column">
              <Card
                logoSrc="path/to/cloud_analytics_logo.png"
                title="Cloud Analytics Modernization"
                content="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
              />
              <Card
                logoSrc="path/to/cloud_analytics_logo.png"
                title="Data Science Acceleration"
                content="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
              />
            </div>
            <div className="column lower-column">
              <Card
                logoSrc="path/to/cloud_analytics_logo.png"
                title="Versatility in Application"
                content="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
              />
              <Card
                logoSrc="path/to/cloud_analytics_logo.png"
                title="Full Customer Experience Service"
                content="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
