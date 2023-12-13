import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Card = ({ title, content, logoSrc }) => {
  return (
    <div className="card">
      <img src={logoSrc} alt="Logo" className="card-logo" />
      <Slide cascade triggerOnce delay={0.8}>
      <h2>{title}</h2>
      </Slide>
      <Slide cascade triggerOnce delay={0.4}>
      <p>{content}</p>
      </Slide>
    </div>
  );
};

export default Card;
